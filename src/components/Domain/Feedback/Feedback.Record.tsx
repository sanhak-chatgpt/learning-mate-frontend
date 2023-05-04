import React from 'react';
import * as S from './Feedback.styles';
import {
  ConfigurationList,
  ConfigurationListProps,
} from '@/components/Domain/Feedback/FeedbackLists';
import {
  RecordButtonWrapper,
  RecordCompleteButton,
  RecordContainer,
  RecordFooter,
  RecordIconContainer,
} from './Feedback.styles';
import { SVGIcon } from '@/components/UI/SVGIcon';
import { useFeedbackRecordContoller } from '@/components/Domain/Feedback/FeedbackRecord.hooks';
import FeedbackWait from '@/components/Domain/Feedback/Feedback.Wait';
import FeedbackResult from '@/components/Domain/Feedback/Feedback.Result';

const FeedBackRecord = ({ config }: ConfigurationListProps) => {
  const {
    recordProcess,
    mediaRecorder,
    handleStopRecording,
    handleStartRecording,
    handleFeedbackResultCheck,
    resumeRecording,
    pauseRecording,
    formattedTime,
    lectureQueryStatus,
    lectureQueryData,
  } = useFeedbackRecordContoller(config);

  const FeedbackResultRendered = () => {
    return lectureQueryStatus === 'loading' ? (
      <div>loading feedback</div>
    ) : lectureQueryStatus === 'error' ? (
      <div>getting feedback has an error</div>
    ) : (
      <FeedbackResult result={lectureQueryData}></FeedbackResult>
    );
  };

  // console.log('레코드 컴포넌트', mediaRecorder?.state);

  return (
    <>
      <S.Root>
        <S.Wrapper flex={'columnStart'}>
          {(recordProcess === 'idle' || recordProcess === 'record') && (
            <>
              <RecordContainer flex={'columnCenter'}>
                <ConfigurationList config={config}></ConfigurationList>
                <RecordIconContainer flex={'columnCenter'}>
                  <SVGIcon
                    className={'Mic'}
                    name={'MicrophoneIcon'}
                    width={134}
                    height={192}
                    viewBox={'0 0 134 192'}
                  />
                  <SVGIcon
                    className={'Circle'}
                    name={'GradientCircleIcon'}
                    width={87}
                    height={87}
                    viewBox={'0 0 87 87'}
                  />
                </RecordIconContainer>
                <h1>{formattedTime} / 05:00</h1>
              </RecordContainer>
            </>
          )}

          {recordProcess === 'progress' && <FeedbackWait />}
          {recordProcess === 'success' && <FeedbackResultRendered />}

          <RecordFooter>
            <RecordButtonWrapper flex={'rowCenter'}>
              {recordProcess === 'idle' ? (
                <SVGIcon
                  name={'RecordIcon'}
                  width={64}
                  height={64}
                  viewBox={'0 0 64 64'}
                  onClick={handleStartRecording}
                />
              ) : recordProcess === 'record' ? (
                <>
                  <SVGIcon
                    name={mediaRecorder?.state === 'recording' ? 'PauseIcon' : 'RecordIcon'}
                    width={64}
                    height={64}
                    viewBox={'0 0 64 64'}
                    onClick={
                      mediaRecorder?.state === 'recording' ? pauseRecording : resumeRecording
                    }
                  />
                  <RecordCompleteButton
                    as={'button'}
                    flex={'rowCenter'}
                    onClick={handleStopRecording}>
                    완료하기
                  </RecordCompleteButton>
                </>
              ) : recordProcess === 'success' ? (
                <RecordCompleteButton
                  as={'button'}
                  flex={'rowCenter'}
                  onClick={handleFeedbackResultCheck}>
                  확인 완료
                </RecordCompleteButton>
              ) : (
                <></>
              )}
            </RecordButtonWrapper>
          </RecordFooter>
        </S.Wrapper>
      </S.Root>
    </>
  );
};

export default FeedBackRecord;
