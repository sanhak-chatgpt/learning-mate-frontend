import React from 'react';
import * as S from '../Feedback.styles';
import {
  ConfigurationList,
  ConfigurationListProps,
} from '@/components/Domain/Feedback/FeedbackListForm';
import {
  RecordButtonWrapper,
  RecordCompleteButton,
  RecordContainer,
  RecordFooter,
  RecordIconContainer,
} from '../Feedback.styles';
import { SVGIcon } from '@/components/UI/SVGIcon';
import { useFeedbackRecordController } from '@/components/Domain/Feedback/Record/FeedbackRecord.hooks';
import FeedbackWait from '@/components/Domain/Feedback/Feedback.Wait';
import FeedbackResult from '@/components/Domain/Feedback/FeedbackResult';

const FeedbackRecordForm = ({ config }: ConfigurationListProps) => {
  const {
    recorderState,
    resetRecording,
    startRecording,
    handleResultCheckDone,
    resumeRecording,
    pauseRecording,
    formattedRecordingTime,
    lectureQueryStatus,
    lectureQueryData,
    recordQueryString,
  } = useFeedbackRecordController(config);

  const FeedbackResultRendered = () => {
    return lectureQueryStatus === 'loading' ? (
      <div>loading feedback</div>
    ) : lectureQueryStatus === 'error' ? (
      <div>getting feedback has an error</div>
    ) : (
      <FeedbackResult result={lectureQueryData}></FeedbackResult>
    );
  };

  return (
    <>
      <S.Root>
        <S.Wrapper flex={'columnStart'}>
          {(recordQueryString === 'idle' || recordQueryString === 'record') && (
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
                <h1>{formattedRecordingTime} / 05:00</h1>
              </RecordContainer>
            </>
          )}

          {recordQueryString === 'progress' && <FeedbackWait />}
          {recordQueryString === 'success' && <FeedbackResultRendered />}

          <RecordFooter>
            <RecordButtonWrapper flex={'rowCenter'}>
              {recordQueryString === 'idle' ? (
                <SVGIcon
                  name={'RecordIcon'}
                  width={64}
                  height={64}
                  viewBox={'0 0 64 64'}
                  onClick={startRecording}
                />
              ) : recordQueryString === 'record' ? (
                <>
                  <SVGIcon
                    name={recorderState === 'record' ? 'PauseIcon' : 'RecordIcon'}
                    width={64}
                    height={64}
                    viewBox={'0 0 64 64'}
                    onClick={recorderState === 'record' ? pauseRecording : resumeRecording}
                  />
                  <RecordCompleteButton as={'button'} flex={'rowCenter'} onClick={resetRecording}>
                    완료하기
                  </RecordCompleteButton>
                </>
              ) : recordQueryString === 'success' ? (
                <RecordCompleteButton
                  as={'button'}
                  flex={'rowCenter'}
                  onClick={handleResultCheckDone}>
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

export default FeedbackRecordForm;
