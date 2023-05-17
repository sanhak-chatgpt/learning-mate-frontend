import { useEffect, useState } from 'react';
import { AudioMediaRecorder, RecorderConfig } from '@/util/AudioRecorder';
import { useObservableTimer } from '@/util/hooks/useRecordTimer';

export type AudioRecorderProps = {
  recorderConfig: RecorderConfig;
  limit?: number;
};

export const useAudioRecorder = (config: AudioRecorderProps) => {
  const [mediaRecorder, setMediaRecorder] = useState<AudioMediaRecorder>();
  const [totalRecordBlob, setTotalRecordBlob] = useState<Blob>();

  const { startTimer, stopTimer, resetTimer, formattedTime, recordTimer } = useObservableTimer();

  const createMediaRecorder = async () => {
    if (!mediaRecorder) {
      const recorder = new AudioMediaRecorder({
        onStart: () => {
          startTimer();
          config.recorderConfig.onStart?.();
        },
        onResume: () => {
          startTimer();
          config.recorderConfig.onResume?.();
        },
        onPause: () => {
          stopTimer();
          config.recorderConfig.onPause?.();
        },
        onStop: () => {
          resetTimer();
          config.recorderConfig.onStop?.();
          setMediaRecorder((recorder) => {
            setTotalRecordBlob(
              new Blob([recorder?.getTotalRecordBlob() as Blob], {
                type: 'audio/wav',
              })
            );
            return undefined;
          });
        },
        onDataAvailable: () => {
          config.recorderConfig.onDataAvailable?.();
        },
        onError: () => {
          config.recorderConfig.onError?.();
        },
      });

      await recorder.initAudioRecorder();
      await recorder?.startRecord();
      setMediaRecorder(recorder);
    }
  };

  const resetRecording = () => {
    if (mediaRecorder?.recorder && mediaRecorder.getRecorderState() !== 'inactive') {
      mediaRecorder.stopRecord();
    }
  };

  const startRecording = async () => {
    await createMediaRecorder();
  };

  const pauseRecording = () => {
    if (mediaRecorder?.recorder && mediaRecorder.getRecorderState() === 'recording') {
      mediaRecorder.pauseRecord();
    }
  };

  const resumeRecording = () => {
    if (mediaRecorder?.recorder && mediaRecorder.getRecorderState() === 'paused') {
      mediaRecorder?.resumeRecord();
    }
  };

  //Timer time Limit Control
  useEffect(() => {
    if (
      recordTimer.getTimeBySecond() === (config.limit ?? 300) &&
      mediaRecorder?.getRecorderState() === 'recording'
    ) {
      resetRecording();
    }
  });

  return {
    mediaRecorder,
    startRecording,
    resumeRecording,
    pauseRecording,
    resetRecording,
    setMediaRecorder,
    totalRecordBlob,
    formattedRecordingTime: formattedTime,
  };
};
