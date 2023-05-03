import React from 'react';
import * as S from './FeedbackForm.styles';
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
} from './FeedbackForm.styles';
import { SVGIcon } from '@/components/UI/SVGIcon';
import { useFeedbackRecordContoller } from '@/components/Domain/Feedback/FeedbackRecord.hooks';
import FeedbackWait from '@/components/Domain/Feedback/Feedback.Wait';

const FeedBackRecord = ({ config }: ConfigurationListProps) => {
  const {
    recordProcess,
    mediaRecorder,
    handleStopRecording,
    handleStartRecording,
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
      <div>{lectureQueryData?.transcribed}</div>
    );
  };

  // console.log('레코드 컴포넌트', mediaRecorder?.state);

  return (
    <>
      {recordProcess !== 'progress' && recordProcess !== 'success' ? (
        <S.Root>
          <S.Wrapper flex={'columnStart'}>
            <ConfigurationList config={config}></ConfigurationList>
            <RecordContainer flex={'columnCenter'}>
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
                  ) : (
                    <></>
                  )}
                </RecordButtonWrapper>
              </RecordFooter>
            </RecordContainer>
          </S.Wrapper>
        </S.Root>
      ) : recordProcess === 'progress' ? (
        <FeedbackWait />
      ) : (
        <FeedbackResultRendered></FeedbackResultRendered>
      )}
    </>
  );
};

export default FeedBackRecord;
