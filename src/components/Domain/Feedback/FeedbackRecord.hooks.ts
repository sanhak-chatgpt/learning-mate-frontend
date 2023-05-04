import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@/util/hooks/useNavigation';
import { useModalContext } from '@/components/UI/Modal/Modal.hooks';
import { BaseError, GeneratePresignedUrlControllerApi, LectureControllerApi } from '@/util';
import { useHeader } from '@/components/App/AppHeader/HeaderContent';
import { FeedbackConfiguration } from '@/components/Domain/Feedback/FeedbackController.hooks';
import { useQuery } from '@tanstack/react-query';

export type RecordProcessState = 'idle' | 'record' | 'progress' | 'success';

export const useFeedbackRecordContoller = (feedbackConfig: FeedbackConfiguration) => {
  const [recordProcess, setRecordProcess] = useState<RecordProcessState>('idle');

  const { setUploadedUrl, lectureQueryData, lectureQueryStatus, handleResultCheckDone } =
    useGetFeedbackResult(feedbackConfig);
  const {
    mediaRecorder,
    stopRecording,
    startRecording,
    resumeRecording,
    pauseRecording,
    formattedTime,
    resetRecording,
  } = useRecord(setUploadedUrl);

  const { replaceQueryString, router, navigateTo } = useNavigation();

  useHeader();

  const recordQueryString = router.query?.record as RecordProcessState;

  useHeaderController(recordQueryString);

  const handleStartRecording = async () => {
    await startRecording(resetProcess);
    handleProcessForward();
  };

  const handleStopRecording = async () => {
    await stopRecording();
    handleProcessForward();
  };

  const handleProcessForward = useCallback(() => {
    if (recordQueryString === 'idle') {
      setRecordProcess('record');
      replaceQueryString({ process: 'lecture', record: 'record' });
    } else if (recordQueryString === 'record') {
      setRecordProcess('progress');
      replaceQueryString({ process: 'lecture', record: 'progress' });
    } else if (recordQueryString === 'progress') {
      setRecordProcess('success');
      replaceQueryString({ process: 'lecture', record: 'success' });
    } else if (recordQueryString === 'success') {
      console.log('핸들 레코드 프로세스');
    }
  }, [recordQueryString, replaceQueryString]);

  const handleFeedbackResultCheck = () => {
    console.log('결과 체크 핸들러 실행');
    handleResultCheckDone(() => {
      resetProcess();
      navigateTo('/');
    });
  };

  const resetProcess = () => {
    setRecordProcess('idle');
    replaceQueryString({ process: 'lecture', record: 'idle' });
    resetRecording();
  };

  //sync process to queryString
  useEffect(() => {
    setRecordProcess(recordQueryString);
  }, [recordQueryString]);

  useEffect(() => {
    if (lectureQueryStatus === 'success' && lectureQueryData?.status === 'SUCCESS') {
      console.log(recordProcess);
      handleProcessForward();
    }
  }, [handleProcessForward, lectureQueryData?.status, lectureQueryStatus]);

  useEffect(() => {
    // if (recordProcess === 'progress' && feedbackConfig.topic?.id) {
    //   handleGetFeedback();
    // }
  }, [feedbackConfig.topic?.id, recordProcess]);

  return {
    recordProcess,
    recordQueryString,
    handleProcessForward,
    mediaRecorder,
    handleStartRecording,
    handleStopRecording,
    handleFeedbackResultCheck,
    resumeRecording,
    pauseRecording,
    formattedTime,
    lectureQueryData,
    lectureQueryStatus,
  };
};

const useGetFeedbackResult = (feedbackConfig: FeedbackConfiguration) => {
  const [uploadedUrl, setUploadedUrl] = useState<string>();
  const [lectureId, setLectureId] = useState<number>();
  const { data, status } = useGetFeedbackQuery(lectureId);
  const { openModal } = useModalContext();
  const handleResultCheckDone = (handleProcessForward: () => void) => {
    openModal({
      type: 'FeedbackResultHelpfulness',
      props: {
        title: '얼마나 도움이 되었나요?',
      },
      events: {
        onClose: () => {
          handleProcessForward();
        },
      },
    });
  };

  const handleGetFeedback = async () => {
    console.log(feedbackConfig.topic?.id);
    console.log(uploadedUrl);
    try {
      if (uploadedUrl) {
        const api = new LectureControllerApi();
        const res = await api.createLecture({
          lectureDtoRequest: {
            topicId: feedbackConfig.topic?.id as number,
            audioUrl: uploadedUrl.split('?')[0] as string,
          },
        });
        setLectureId(res.id);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleGetFeedback();
  }, [uploadedUrl]);

  return {
    lectureQueryData: data,
    lectureQueryStatus: status,
    setUploadedUrl,
    handleResultCheckDone,
  };
};

export const GET_FEEDBACK_QUERY_KEY = 'feedback';

export const useGetFeedbackQuery = (lectureId?: number) => {
  const { data, status, refetch } = useQuery({
    queryKey: [GET_FEEDBACK_QUERY_KEY],
    queryFn: async () => {
      const api = new LectureControllerApi();
      return await api.getLecture({ id: lectureId as number });
    },
    enabled: !!lectureId,
    refetchInterval: (data, query) => {
      if (data && data.status === 'SUCCESS') {
        return false;
      }
      return 3000;
    },
  });
  return { data, status };
};

const useHeaderController = (queryString: RecordProcessState) => {
  const { setHeaderContent } = useHeader();

  useEffect(() => {
    if (queryString === 'progress') {
      setHeaderContent({
        state: 'feedback',
        description: '',
        title: '',
      });
    } else if (queryString === 'success') {
      setHeaderContent({ state: 'feedback', description: '', title: '피드백이 도착했어요!' });
    }
  }, [queryString]);
};

const useRecord = (setUploadedUrl: Dispatch<SetStateAction<string | undefined>>) => {
  const [audioBlob, setAudioBlob] = useState<Blob>();
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder>();
  const { startTimer, stopTimer, resetTimer, formattedTime, timer } = useRecordTimer();
  const { openModal } = useModalContext();

  const createMediaRecorder = useCallback(
    async (failCallback?: (...args: any) => void) => {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const audioChunks: Blob[] = [];

      if (!!recorder) {
        recorder.onstart = () => {
          startTimer();
        };

        recorder.ondataavailable = (e) => {
          audioChunks.push(e.data);
        };

        recorder.onstop = async () => {
          const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
          setAudioBlob(audioBlob);
          const url = await uploadAudio(audioBlob, failCallback);
          setUploadedUrl(url);
        };
      }
      recorder?.start();
      setMediaRecorder(recorder);
    },
    [setUploadedUrl, startTimer]
  );

  const startRecording = async (failCallback?: (...args: any) => void) => {
    await createMediaRecorder(failCallback);
  };

  const stopRecording = useCallback(() => {
    resetTimer();
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder?.stop();
      setMediaRecorder(undefined);
    }
  }, [mediaRecorder, resetTimer]);

  const pauseRecording = () => {
    console.log(mediaRecorder?.state);
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder?.pause();
      stopTimer();
    }
  };

  const resumeRecording = () => {
    mediaRecorder?.resume();
    startTimer();
  };

  const resetRecording = () => {
    setMediaRecorder(undefined);
    resetTimer();
  };

  const uploadAudio = async (audioBlob: Blob, failCallback?: (...args: any) => void) => {
    console.log(audioBlob);
    if (!audioBlob) {
      openModal({
        type: 'Basic',
        props: { title: '피드백을 위해서 먼저 녹음을 해주세요!' },
        events: {
          onClose: failCallback,
        },
      });
    }

    try {
      const { uploadPresignedUrl } =
        await new GeneratePresignedUrlControllerApi().getPresignedUrl();
      return await uploadAudioToS3(uploadPresignedUrl, audioBlob as Blob);
    } catch (e) {
      openModal({
        type: 'Basic',
        props: { title: '업로드 실패' },
        events: {
          onClose: failCallback,
        },
      });
    }
  };

  //Timer Limit Control
  useEffect(() => {
    if (timer === 300 && mediaRecorder?.state === 'recording') {
      // 300초 (5분)에 도달하면 녹음 중지
      stopRecording();
    }
  }, [mediaRecorder, stopRecording, timer]);

  return {
    mediaRecorder,
    uploadAudio,
    startRecording,
    stopRecording,
    resumeRecording,
    pauseRecording,
    formattedTime,
    resetRecording,
  };
};

const useRecordTimer = () => {
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();

  const startTimer = () => {
    const id = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    setIntervalId(id);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIntervalId(undefined);
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    setIntervalId(undefined);
    setTimer(0);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const formattedTime = formatTime(timer);

  return {
    startTimer,
    stopTimer,
    resetTimer,
    formattedTime,
    timer,
  };
};

async function uploadAudioToS3(presignedUrl: string, audioBlob: Blob) {
  try {
    const res = await fetch(presignedUrl, {
      method: 'PUT',
      body: audioBlob,
      headers: {
        'Content-Type': 'audio/wav',
      },
    });
    console.log(res);
    console.log(res.url);
    return res.url;
  } catch (e) {
    throw e as BaseError;
  }
}
