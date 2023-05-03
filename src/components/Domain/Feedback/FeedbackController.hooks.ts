import React, { DispatchWithoutAction, useCallback, useEffect } from 'react';
import { useHeader } from '@/components/App/AppHeader/HeaderContent';
import {
  MainHeader,
  MainHeaderDescription,
} from '@/components/App/AppHeader/HeaderContent/MainHeaderImpl/MainHeader';
import {
  SubjectHeader,
  TopicHeader,
} from '@/components/App/AppHeader/HeaderContent/MainHeaderImpl/FeedbackHeader';
import { useInfiniteQuery } from '@tanstack/react-query';
import { MajorControllerApi, SubjectControllerApi, TopicControllerApi } from '@/util';
import { useNavigation } from '@/util/hooks/useNavigation';
import { useModalContext } from '@/components/UI/Modal/Modal.hooks';

export type ProcessState = 'major' | 'subject' | 'topic' | 'lecture';

export type Config = { id: number; name: string };
export interface FeedbackConfiguration {
  major?: Config;
  subject?: Config;
  topic?: Config;
}

export type FeedbackConfigKey = keyof FeedbackConfiguration;

export const MAJOR_QUERY_KEY = 'major';
export const SUBJECT_QUERY_KEY = 'subject';
export const TOPIC_QUERY_KEY = 'topic';
export const useFeedbackController = () => {
  const [processState, setProcessState] = React.useState<ProcessState>('major');
  const { replaceQueryString, router } = useNavigation();

  const currentQueryString = router.query?.process as ProcessState;

  const handleForwardProcess = () => {
    if (currentQueryString === 'major') {
      setProcessState('subject');
      replaceQueryString({ process: 'subject' });
    } else if (currentQueryString === 'subject') {
      setProcessState('topic');
      replaceQueryString({ process: 'topic' });
    } else if (currentQueryString === 'topic') {
      setProcessState('lecture');
      replaceQueryString({ process: 'lecture', record: 'idle' });
    }
  };

  const { handlePickItem, feedbackConfig, setFeedbackConfig } = useHandleFeedbackConfig({
    handleForwardProcess,
    queryString: currentQueryString,
  });

  //sync currentQueryString with processState
  useEffect(() => {
    setProcessState(currentQueryString);
  }, [currentQueryString]);

  //비정상적인 접근 제어 processState !== queryString
  useInvalidAccess({ processState, setProcessState, setFeedbackConfig });
  //header 제어
  useFeedbackHeaderController(currentQueryString, feedbackConfig);

  const majorQuery = useInfiniteMajorList(processState);
  const subjectQuery = useInfiniteSubjectList(processState, feedbackConfig.major?.id as number);
  const topicQuery = useInfiniteTopicList(processState, feedbackConfig.subject?.id as number);

  //unmount State reset

  return {
    processState,
    feedbackConfig,
    handleForwardProcess,
    handlePickItem,
    majorQuery,
    subjectQuery,
    topicQuery,
    currentQueryString,
  };
};

export type UseHandleFeedbackConfigProps = {
  queryString: ProcessState;
  handleForwardProcess: (...args: any) => void;
};
export const useHandleFeedbackConfig = ({
  handleForwardProcess,
  queryString,
}: UseHandleFeedbackConfigProps) => {
  const [feedbackConfig, setFeedbackConfig] = React.useState<FeedbackConfiguration>({});

  // const checkInvalidConfig = useCallback(() => {
  //   if (queryString === 'major' && !!feedbackConfig.major) {
  //     setFeedbackConfig(() => {
  //       return {} as FeedbackConfiguration;
  //     });
  //   }
  //
  //   if (queryString === 'subject' && !!feedbackConfig.subject) {
  //     setFeedbackConfig((prevState) => {
  //       return { major: prevState.major };
  //     });
  //   }
  //
  //   if (queryString === 'topic' && !!feedbackConfig.topic) {
  //     setFeedbackConfig((prevState) => {
  //       return { major: prevState.major, subject: prevState.topic };
  //     });
  //   }
  // }, [queryString]);
  //
  // checkInvalidConfig();

  const handlePickItem = (key: FeedbackConfigKey, config: Config) => {
    setFeedbackConfig((prevState) => {
      if (key === 'major') {
        return { ...prevState, major: config };
      } else if (key === 'subject') {
        return { ...prevState, subject: config };
      } else {
        return { ...prevState, topic: config };
      }
    });
    handleForwardProcess();
  };

  return {
    handlePickItem,
    feedbackConfig,
    setFeedbackConfig,
  };
};

export const useFeedbackHeaderController = (
  queryString: string,
  feedbackConfig: FeedbackConfiguration
) => {
  const { setHeaderContent } = useHeader();

  const handleHeaderContent = useCallback(() => {
    switch (queryString) {
      case 'major': {
        setHeaderContent({
          title: '전공을 선택해주세요.',
          description: '',
          state: 'feedback',
        });
        return;
      }
      case 'subject': {
        setHeaderContent({
          title: () => SubjectHeader(feedbackConfig.major?.name || 'unPicked'),
          description: '',
          state: 'feedback',
        });
        return;
      }
      case 'topic': {
        setHeaderContent({
          title: () => TopicHeader(feedbackConfig.subject?.name || 'unPicked'),
          description: '',
          state: 'feedback',
        });
        return;
      }
      case 'lecture': {
        setHeaderContent({
          title: '강의를 진행해주세요.',
          description: '',
          state: 'feedback',
        });
        return;
      }
    }
  }, [queryString, setHeaderContent]);

  useEffect(() => {
    handleHeaderContent();
    return () => {
      setHeaderContent({
        title: MainHeader,
        description: MainHeaderDescription,
        state: 'main',
      });
    };
  }, [queryString]);

  return {
    handleHeaderContent,
  };
};

export type UseInvalidAccessProps = {
  processState: ProcessState;
  setFeedbackConfig: React.Dispatch<React.SetStateAction<FeedbackConfiguration>>;
  setProcessState: React.Dispatch<React.SetStateAction<ProcessState>>;
};
export const useInvalidAccess = ({
  processState,
  setProcessState,
  setFeedbackConfig,
}: UseInvalidAccessProps) => {
  const { openModal } = useModalContext();
  const { navigateTo, router } = useNavigation();
  const handleInvalidAccess = useCallback(() => {
    openModal({
      type: 'Basic',
      props: {
        title: '잘못된 접근입니다.',
      },
      events: {
        onClose: () => {
          navigateTo('/');
        },
      },
    });
  }, []);

  useEffect(() => {
    if (router.query?.process !== processState) {
      handleInvalidAccess();
    }
    return () => {
      setFeedbackConfig({});
      setProcessState('major');
    };
  }, []);
  //비정상적인 접근으로 url !== processState인 상황
};

export const useInfiniteMajorList = (queryString: ProcessState) => {
  const query = useInfiniteQuery({
    queryKey: [MAJOR_QUERY_KEY],
    queryFn: async ({ pageParam = 0 }) => {
      const api = new MajorControllerApi();
      return await api.getAllMajors({ page: pageParam, size: 10 });
    },
    enabled: queryString === 'major',
    refetchOnMount: 'always',
    getNextPageParam: (lastPage, allPages) => {
      const isLast = lastPage?.last;
      const nextPageParam: number = (lastPage?.pageable?.pageNumber as number) + 1;
      if (isLast) return null;
      return nextPageParam;
    },
  });
  return query;
};

export const useInfiniteSubjectList = (queryString: ProcessState, majorId: number) => {
  const query = useInfiniteQuery({
    queryKey: [SUBJECT_QUERY_KEY],
    queryFn: async ({ pageParam = 0 }) => {
      const api = new SubjectControllerApi();
      return await api.getAllSubject({ majorId, page: pageParam, size: 10 });
    },
    enabled: queryString === 'subject',
    getNextPageParam: (lastPage, allPages) => {
      const isLast = lastPage?.last;
      const nextPageParam: number = (lastPage?.pageable?.pageNumber as number) + 1;
      if (isLast) return null;
      return nextPageParam;
    },
  });
  return query;
};

export const useInfiniteTopicList = (queryString: ProcessState, subjectId: number) => {
  const query = useInfiniteQuery({
    queryKey: [TOPIC_QUERY_KEY],
    queryFn: async ({ pageParam = 0 }) => {
      const api = new TopicControllerApi();
      return await api.getTopicsBySubjectId({ subjectId, page: pageParam, size: 10 });
    },
    enabled: queryString === 'topic',
    getNextPageParam: (lastPage, allPages) => {
      const isLast = lastPage?.last;
      const nextPageParam: number = (lastPage?.pageable?.pageNumber as number) + 1;
      if (isLast) return null;
      return nextPageParam;
    },
  });
  return query;
};
