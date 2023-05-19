export type ObserverFunc<C, T = unknown, R = unknown> = (this: C, args?: T) => R;
export interface Observable<C, TObserver = ObserverFunc<C>> {
  observers: TObserver[];
  subscribe: (obs: TObserver) => () => void;
  notify: () => void;
}

export type UnsubscribeFunc = () => void;

export abstract class ObservableAbstraction<
  C extends ObservableAbstraction<any, any>,
  TObserver extends ObserverFunc<C>
> {
  protected observers: TObserver[] = [];
  protected abstract subscribe(obs: TObserver): UnsubscribeFunc;
  protected abstract notify(): void;
}
