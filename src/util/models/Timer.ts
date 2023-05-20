import { Observable, ObserverFunc } from '@/util/models/Observable';

export type TimerObserver = ObserverFunc<ObservableTimer>;

export class ObservableTimer implements Observable<ObservableTimer, TimerObserver> {
  private time = 0;
  private timer: NodeJS.Timer | undefined;
  observers: TimerObserver[] = [];
  constructor() {}

  public startTimer = () => {
    this.timer = setInterval(() => {
      this.time += 1;
      this.notify();
    }, 1000);
  };

  public stopTimer = () => {
    clearInterval(this.timer);
  };

  public resetTimer = () => {
    this.stopTimer();
    this.time = 0;
    this.notify();
  };

  public subscribe = (obs: TimerObserver, ...args: unknown[]) => {
    const boundedObserver = obs.bind(this, ...args);
    this.observers.push(boundedObserver);

    //unsubscribe callback, 외부에서 인라인 함수로 unsubscribe를 하지 못하기 때문에 이에 대해 대응
    return () => {
      const targetIndex = this.observers.indexOf(boundedObserver);
      this.observers = this.observers.filter((obs, idx) => idx !== targetIndex);
    };
  };

  public notify = () => {
    this.observers.forEach((obs) => {
      obs.call(this);
    });
  };

  public getFormattedTime = () => {
    const minutes = Math.floor(this.time / 60);
    const remainingSeconds = this.time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  public getTimeBySecond = () => {
    return this.time;
  };
}
