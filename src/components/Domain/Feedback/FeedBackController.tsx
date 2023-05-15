import React, { Suspense } from 'react';
import { useFeedbackController } from '@/components/Domain/Feedback/FeedbackController.hooks';
import { MajorList, SubjectList, TopicList } from '@/components/Domain/Feedback/FeedbackListForm';
import FeedbackRecord from '@/components/Domain/Feedback/Record/FeedbackRecordForm';
import { ErrorBoundary, FallBackProps } from '@/components/Global/ErrorBoundary';
import * as S from '@/components/Domain/Feedback/Feedback.styles';

export const ListRefetchFallback = ({ resetErrorBoundary }: FallBackProps) => {
  return (
    <S.Root>
      <S.Wrapper flex={'columnCenter'}>
        <button onClick={resetErrorBoundary}>다시 불러오기</button>
      </S.Wrapper>
    </S.Root>
  );
};

export const ListSuspense = () => {
  return (
    <S.Root>
      <S.Wrapper flex={'columnCenter'}>전공 목록 불러오는 중...</S.Wrapper>
    </S.Root>
  );
};

export const FeedbackController = () => {
  const { feedbackConfig, currentProcess, handlePickItem } = useFeedbackController();

  return (
    <ErrorBoundary FallbackComponent={ListRefetchFallback}>
      <Suspense fallback={<ListSuspense />}>
        <S.Root>
          <S.Wrapper flex={'columnStart'}>
            {currentProcess === 'major' ? (
              <MajorList
                handlePickItem={handlePickItem}
                feedbackConfig={feedbackConfig}
                currentProcess={currentProcess}
              />
            ) : currentProcess === 'subject' ? (
              <SubjectList
                handlePickItem={handlePickItem}
                feedbackConfig={feedbackConfig}
                currentProcess={currentProcess}
              />
            ) : currentProcess === 'topic' ? (
              <TopicList
                handlePickItem={handlePickItem}
                feedbackConfig={feedbackConfig}
                currentProcess={currentProcess}
              />
            ) : currentProcess === 'lecture' ? (
              <FeedbackRecord config={feedbackConfig}></FeedbackRecord>
            ) : (
              <div></div>
            )}
          </S.Wrapper>
        </S.Root>
      </Suspense>
    </ErrorBoundary>
  );
};

export default FeedbackController;
