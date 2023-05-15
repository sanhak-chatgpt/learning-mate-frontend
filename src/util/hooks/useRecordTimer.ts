import { useState } from 'react';
import { ObservableTimer } from '@/util/Timer';

export const useObservableTimer = () => {
  const [recordTimer, setRecordTimer] = useState<ObservableTimer>(() => new ObservableTimer());
  const [formattedTime, setFormattedTime] = useState<string>(recordTimer.getFormattedTime());

  const startTimer = () => {
    recordTimer.subscribe(function () {
      setFormattedTime(this.getFormattedTime());
    });
    recordTimer.startTimer();
  };

  const stopTimer = () => {
    recordTimer.stopTimer();
  };

  const resetTimer = () => {
    recordTimer.resetTimer();
  };

  return {
    startTimer,
    stopTimer,
    resetTimer,
    recordTimer,
    setRecordTimer,
    formattedTime,
  };
};
