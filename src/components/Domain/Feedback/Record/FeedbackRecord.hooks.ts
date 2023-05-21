import { useEffect, useState } from 'react';
import { useNavigation } from '@/util/hooks/useNavigation';
import { useModalContext } from '@/components/UI/Modal/Modal.hooks';
import { GeneratePresignedUrlControllerApi, LectureControllerApi } from '@/util/Api';
import { useHeader } from '@/components/App/AppHeader/HeaderContent';
import { FeedbackConfiguration } from '@/components/Domain/Feedback/FeedbackController.hooks';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useAudioRecorder } from '@/util/hooks/useAudioRecorder';
import { microphonePermissionBridgeController } from '@/bridge/services/Bridge.MicrphonePermission.service';
import { useRecoilValue } from 'recoil';
import { agentState } from '@/states/state.agent';
import { BaseError } from '@/util/models/Error';
import { request } from '@/util/models/Fetch';

export type RecordProcessState = 'idle' | 'record' | 'progress' | 'success';

export const useFeedbackRecordController = (feedbackConfig: FeedbackConfiguration) => {
  useHeaderController();
  const {
    mediaRecorder,
    startRecording,
    resetRecording,
    resumeRecording,
    pauseRecording,
    totalRecordBlob,
    formattedRecordingTime,
    recorderState,
  } = useFeedbackAudioRecorder();
  const { router } = useNavigation();
  const recordQueryString = router.query?.record as RecordProcessState;

  const { lectureQueryData, lectureQueryStatus, handleResultCheckDone } = useGetFeedbackResult(
    feedbackConfig,
    totalRecordBlob
  );

  return {
    recorderState,
    mediaRecorder,
    startRecording,
    resetRecording,
    resumeRecording,
    pauseRecording,
    formattedRecordingTime,
    lectureQueryData,
    lectureQueryStatus,
    handleResultCheckDone,
    recordQueryString,
  };
};

export type RecorderState = 'idle' | 'record' | 'pause';

const useFeedbackAudioRecorder = () => {
  const { navigateTo, router } = useNavigation();
  const [recorderState, setRecorderState] = useState<RecorderState>('idle');
  const [isGranted, setIsGranted] = useState<boolean>(false);
  const agentController = useRecoilValue(agentState);
  const [micPermissionController, setMicPermissionController] = useState(
    microphonePermissionBridgeController
  );

  const {
    mediaRecorder,
    startRecording,
    resumeRecording,
    pauseRecording,
    resetRecording,
    totalRecordBlob,
    formattedRecordingTime,
  } = useAudioRecorder({
    recorderConfig: {
      onStart: () => {
        if (router.query.record !== 'record') {
          navigateTo({
            path: '/feedback',
            query: {
              process: 'lecture',
              record: 'record',
            },
            successCallback: () => {
              setRecorderState('record');
            },
          });
        }
      },
      onStop: () => {
        navigateTo({
          path: '/feedback',
          query: {
            process: 'lecture',
            record: 'progress',
          },
          successCallback: () => {
            setRecorderState('idle');
          },
        });
      },
    },
  });

  // set Permission Observer and request microphone permission
  useEffect(() => {
    if (agentController.isOnWebview()) {
      const describe = micPermissionController.subscribe(function () {
        //micPermissionController.receiveMessage 호출 시 마다 옵저버 함수가 실행돼, 리액트 라이프사이클과 연동
        setIsGranted(this.getServiceImpl().getIsGranted());
      });
      micPermissionController.requestMessage('requestMicrophonePermission');

      return () => {
        describe();
      };
    }
    else{
      setIsGranted(true)
    }
  }, []);

  const handleStartRecording = async () => {
    console.log(isGranted);
    if (isGranted) {
      await startRecording();
    }else{
      micPermissionController.requestMessage('requestMicrophonePermission');
    }
  };

  const handleResumeRecording = () => {
    resumeRecording();
    setRecorderState('record');
  };
  const handlePauseRecording = () => {
    pauseRecording();
    setRecorderState('pause');
  };

  return {
    mediaRecorder,
    startRecording: handleStartRecording,
    resumeRecording: handleResumeRecording,
    pauseRecording: handlePauseRecording,
    recorderState,
    totalRecordBlob,
    formattedRecordingTime,
    resetRecording,
  };
};

const useGetFeedbackResult = (feedbackConfig: FeedbackConfiguration, audioBlob?: Blob) => {
  const { router, navigateTo } = useNavigation();
  const { openModal } = useModalContext();
  const currentRecordProcess = router.query?.record as RecordProcessState;
  const queryClient = useQueryClient();
  const presignedResDto = useGetPresignedUrlQuery(currentRecordProcess);
  const uploadedUrl = useUploadAudioToS3Query(presignedResDto?.uploadPresignedUrl, audioBlob);
  const lectureResDto = useGetLectureIdQuery({ topicId: feedbackConfig.topic?.id, uploadedUrl });
  const { data, status } = useGetFeedbackQuery(lectureResDto?.id);

  const handleResultCheckDone = () => {
    openModal({
      type: 'FeedbackResultHelpfulness',
      props: {
        title: '얼마나 도움이 되었나요?',
      },
      events: {
        onClose: () => {
          navigateTo({ path: '/' });
        },
      },
    });
  };

  useEffect(() => {
    return () => {
      queryClient.removeQueries([
        PRESIGNED_URL_QUERY_KEY,
        UPLOAD_AUDIO_TO_S3_KEY,
        LECTURE_ID_QUERY_KEY,
        FEEDBACK_QUERY_KEY,
      ]);
    };
  }, []);

  return {
    lectureQueryData: data,
    lectureQueryStatus: status,
    handleResultCheckDone,
  };
};

const useHeaderController = () => {
  const { router } = useNavigation();
  const currentQueryString = router.query.record as RecordProcessState;
  const { setHeaderContent } = useHeader();

  useEffect(() => {
    if (currentQueryString === 'progress') {
      setHeaderContent({
        title: '',
        description: '',
        backward: {
          visible: false,
          historyStack: [],
        },
      });
    }
    if (currentQueryString === 'success') {
      setHeaderContent({
        description: '',
        title: '피드백이 도착했어요!',
        backward: {
          visible: true,
          historyStack: [
            {
              prev: {
                path: '/',
              },
              current: {
                path: '/feedback',
                query: {
                  process: 'record',
                  record: 'success',
                },
              },
            },
          ],
        },
      });
    }
  }, [router.query, currentQueryString, setHeaderContent]);
};

export type GetLectureIdProps = {
  topicId: number;
  uploadedUrl: string;
};

export const getLectureId = async (config: GetLectureIdProps) => {
  try {
    if (config.uploadedUrl) {
      const api = new LectureControllerApi();
      return await api.createLecture({
        lectureDtoRequest: {
          topicId: config.topicId,
          audioUrl: config.uploadedUrl.split('?')[0],
        },
      });
    }
  } catch (e) {
    const { message } = e as Error;
    throw new BaseError(message);
  }
};

export const LECTURE_ID_QUERY_KEY = 'lecture';
export const useGetLectureIdQuery = ({ topicId, uploadedUrl }: Partial<GetLectureIdProps>) => {
  const { data } = useQuery({
    queryKey: [LECTURE_ID_QUERY_KEY],
    queryFn: async () => {
      const res = await getLectureId({
        topicId: topicId as number,
        uploadedUrl: uploadedUrl as string,
      });
      return res;
    },
    enabled: !!topicId && !!uploadedUrl,
    cacheTime: 0,
  });
  return data;
};

export const uploadAudioToS3 = async (presignedUrl: string, audioBlob: Blob) => {
  const res = await request(presignedUrl, {
    method: 'PUT',
    body: audioBlob,
    headers: {
      'Content-Type': 'audio/wav',
    },
  });
  return res.url;
};

export const UPLOAD_AUDIO_TO_S3_KEY = ['audio', 's3'];

export const useUploadAudioToS3Query = (presignedUrl?: string, audioBlob?: Blob) => {
  const { openModal } = useModalContext();
  const { navigateTo } = useNavigation();
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: UPLOAD_AUDIO_TO_S3_KEY,
    queryFn: async () => {
      return await uploadAudioToS3(presignedUrl as string, audioBlob as Blob);
    },
    enabled: !!presignedUrl && !!audioBlob,
    cacheTime: 0,
    onError: () => {
      openModal({
        type: 'Basic',
        props: { title: '음성 파일업로드 실패', description: '잠시 후 다시 시도해주세요. ' },
        events: {
          onClose: () => {
            navigateTo({ path: '/' });
            queryClient.setQueriesData([UPLOAD_AUDIO_TO_S3_KEY], undefined);
          },
        },
      });
    },
  });

  return data;
};

export const FEEDBACK_QUERY_KEY = 'feedback';

export const useGetFeedbackQuery = (lectureId?: number) => {
  const { navigateTo } = useNavigation();
  const { openModal } = useModalContext();
  const queryClient = useQueryClient();
  const { data, status, refetch } = useQuery({
    queryKey: [FEEDBACK_QUERY_KEY],
    queryFn: async () => {
      const api = new LectureControllerApi();
      return await api.getLecture({ id: lectureId as number });
    },
    enabled: !!lectureId,
    refetchInterval: (data, query) => {
      if (data && data.status !== 'IN_PROGRESS') {
        return false;
      }
      return 3000;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    cacheTime: 0,
    onSuccess: (data) => {
      if (data && data.status === 'SUCCESS') {
        navigateTo({
          path: '/feedback',
          query: {
            process: 'lecture',
            record: 'success',
          },
          successCallback: () => {},
        });
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if ((data && data.status) === 'STT_EMPTY') {
        openModal({
          type: 'Basic',
          props: {
            title: '앗! 정상적이지 않은 강의에요!',
            description: '강의에는 강의자의 목소리가 포함되어야 해요.',
          },
          events: {
            onClose: () => {
              navigateTo({ path: '/' });
              queryClient.setQueriesData([FEEDBACK_QUERY_KEY], undefined);
            },
          },
        });
      }
      if ((data && data.status) === 'FAILURE') {
        openModal({
          type: 'Basic',
          props: {
            title: '피드백 생성 중 오류 발생',
            description: '나중에 다시 시도해주세요.',
          },
          events: {
            onClose: () => {
              navigateTo({ path: '/' });
              queryClient.setQueriesData([FEEDBACK_QUERY_KEY], undefined);
            },
          },
        });
      }
    },
  });
  return { data, status };
};

export const PRESIGNED_URL_QUERY_KEY = 'presigned_url';

export const useGetPresignedUrlQuery = (queryString: RecordProcessState) => {
  const { data } = useQuery({
    queryKey: [PRESIGNED_URL_QUERY_KEY],
    queryFn: async () => await new GeneratePresignedUrlControllerApi().getPresignedUrl(),
    enabled: queryString === 'progress',
    cacheTime: 0,
    retry: true,
  });
  return data;
};
