import React, { DispatchWithoutAction, useCallback, useEffect } from 'react';
import { useHeader } from '@/components/App/AppHeader/HeaderContent';
import {
  MainHeader,
  MainHeaderDescription,
} from '@/components/App/AppHeader/HeaderContent/HeaderContentImpls/MainHeader';
import {
  SubjectHeader,
  TopicHeader,
} from '@/components/App/AppHeader/HeaderContent/HeaderContentImpls/FeedbackHeader';
import { useInfiniteQuery } from '@tanstack/react-query';
import { MajorControllerApi, SubjectControllerApi, TopicControllerApi } from '@/util';
import { useNavigation } from '@/util/hooks/useNavigation';
import { useModalContext } from '@/components/UI/Modal/Modal.hooks';
import { useSetRecoilState } from 'recoil';
import { footerConfigurationState } from '@/states/state.footer';

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
  const { replaceQueryString, router, navigateTo } = useNavigation();
  const setFooterConfig = useSetRecoilState(footerConfigurationState);
  const { openModal } = useModalContext();
  const currentProcess = router.query?.process as ProcessState;

  const handleForwardProcess = async () => {
    if (currentProcess === 'major') {
      await replaceQueryString({ process: 'subject' });
    } else if (currentProcess === 'subject') {
      await replaceQueryString({ process: 'topic' });
    } else if (currentProcess === 'topic') {
      await replaceQueryString({ process: 'lecture', record: 'idle' });
    }
  };

  const { handlePickItem, feedbackConfig } = useHandleFeedbackConfig({
    handleForwardProcess,
    queryString: currentProcess,
  });

  //header 제어
  useFeedbackHeaderController(currentProcess, feedbackConfig);

  //비정상적인 접근 제어 processState !== queryString
  useEffect(() => {
    if (isInvalidAccess({ queryString: currentProcess, feedbackConfig })) {
      openModal({
        type: 'Basic',
        props: {
          title: '잘못된 접근입니다.',
        },
        overlayOptions: {
          preventScroll: true,
          dim: true,
        },
        events: {
          onClose: () => {
            navigateTo({ path: '/' });
          },
        },
      });
    }
    setFooterConfig({
      isVisible: false,
    });
    return () => {
      setFooterConfig({
        isVisible: true,
      });
    };
  }, [currentProcess]);

  return {
    feedbackConfig,
    handleForwardProcess,
    handlePickItem,
    currentProcess,
  };
};

export type UseHandleFeedbackConfigProps = {
  queryString: ProcessState;
  handleForwardProcess: (...args: any) => void;
};
export const useHandleFeedbackConfig = ({ handleForwardProcess }: UseHandleFeedbackConfigProps) => {
  const [feedbackConfig, setFeedbackConfig] = React.useState<FeedbackConfiguration>({});

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

  //unmount State reset
  useEffect(() => {
    return () => {
      setFeedbackConfig({});
    };
  }, []);

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
          backward: {
            visible: true,
            historyStack: [],
          },
        });
        return;
      }
      case 'subject': {
        setHeaderContent({
          title: () => SubjectHeader(feedbackConfig.major?.name || 'unPicked'),
          description: '',
          backward: {
            visible: true,
            historyStack: [],
          },
        });
        return;
      }
      case 'topic': {
        setHeaderContent({
          title: () => TopicHeader(feedbackConfig.subject?.name || 'unPicked'),
          description: '',
          backward: {
            visible: true,
            historyStack: [],
          },
        });
        return;
      }
      case 'lecture': {
        setHeaderContent({
          title: '강의를 진행해주세요.',
          description: '',
          backward: {
            visible: true,
            historyStack: [],
          },
        });
        return;
      }
    }
  }, [queryString]);

  useEffect(() => {
    handleHeaderContent();
    return () => {
      setHeaderContent({
        title: MainHeader,
        description: MainHeaderDescription,
        backward: {
          visible: false,
          historyStack: [],
        },
      });
    };
  }, [queryString]);
};

export type UseInvalidAccessProps = {
  queryString: ProcessState;
  feedbackConfig: FeedbackConfiguration;
};
export const isInvalidAccess = ({ queryString, feedbackConfig }: UseInvalidAccessProps) => {
  if (!queryString) return false;
  return queryString !== 'major' && !feedbackConfig.major;
};

export const useInfiniteMajorList = (currentProcess: ProcessState) => {
  const query = useInfiniteQuery({
    queryKey: [MAJOR_QUERY_KEY],
    queryFn: async ({ pageParam = 0 }) => {
      const api = new MajorControllerApi();
      return await api.getAllMajors({ page: pageParam, size: 10 });
    },
    enabled: currentProcess === 'major',
    suspense: true,
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

export const useInfiniteSubjectList = (currentProcess: ProcessState, majorId?: number) => {
  const query = useInfiniteQuery({
    queryFn: async ({ pageParam = 0 }) => {
      const api = new SubjectControllerApi();
      return await api.getAllSubject({ majorId: majorId as number, page: pageParam, size: 10 });
    },
    queryKey: [SUBJECT_QUERY_KEY],
    suspense: true,
    enabled: !!majorId && currentProcess === 'subject',
    getNextPageParam: (lastPage, allPages) => {
      const isLast = lastPage?.last;
      const nextPageParam: number = (lastPage?.pageable?.pageNumber as number) + 1;
      if (isLast) return null;
      return nextPageParam;
    },
  });
  return query;
};

export const useInfiniteTopicList = (currentProcess: ProcessState, subjectId?: number) => {
  const query = useInfiniteQuery({
    queryKey: [TOPIC_QUERY_KEY],
    queryFn: async ({ pageParam = 0 }) => {
      const api = new TopicControllerApi();
      return await api.getTopicsBySubjectId({
        subjectId: subjectId as number,
        page: pageParam,
        size: 10,
      });
    },
    suspense: true,
    enabled: !!subjectId && currentProcess === 'topic',
    getNextPageParam: (lastPage, allPages) => {
      const isLast = lastPage?.last;
      const nextPageParam: number = (lastPage?.pageable?.pageNumber as number) + 1;
      if (isLast) return null;
      return nextPageParam;
    },
  });
  return query;
};
