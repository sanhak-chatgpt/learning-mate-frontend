export type ObserverFunc<C, T = unknown, R = unknown> = (this: C, args?: T) => R;
export interface Observable<C = typeof this, TObserver = ObserverFunc<C>> {
  observers: TObserver[];
  subscribe: (obs: TObserver) => () => void;
  notify: () => void;
}
