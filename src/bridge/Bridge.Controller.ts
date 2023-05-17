import { ObservableAbstraction, ObserverFunc } from '@/util/Observable';

export interface BridgeService<TRequestMessage, TResponseParam> {
  send: (message: TRequestMessage) => void;
  receive: (params: TResponseParam) => void;
}

type ExtractBridgeServiceTypes<T> = T extends BridgeService<infer TReq, infer TRes>
  ? { TReq: TReq; TRes: TRes }
  : never;

type RequestMessageOf<T> = ExtractBridgeServiceTypes<T>['TReq'];
type ResponseParamOf<T> = ExtractBridgeServiceTypes<T>['TRes'];

export interface BridgeControllerAbstraction<TService extends BridgeService<unknown, unknown>> {
  setServiceImpl: (implementation: TService) => void;
  getServiceImpl: () => TService;
  requestMessage: (message: RequestMessageOf<TService>) => void;
  receiveMessage: (params: ResponseParamOf<TService>) => void;
}

export type BridgeObserver<TService extends BridgeService<unknown, unknown>> = ObserverFunc<
  BridgeController<TService>
>;

export class BridgeController<TService extends BridgeService<any, any>>
  extends ObservableAbstraction<BridgeController<TService>, BridgeObserver<TService>>
  implements BridgeControllerAbstraction<TService>
{
  observers: BridgeObserver<TService>[] = [];
  test = 0;
  constructor(protected implementation: TService) {
    super();
  }

  public getServiceImpl(): TService {
    return this.implementation;
  }
  public setServiceImpl = (impl: TService): void => {
    this.implementation = impl;
  };

  public requestMessage = (message: RequestMessageOf<TService>): void => {
    this.implementation.send(message);
    this.notify();
  };

  public receiveMessage = (message: ResponseParamOf<TService>): void => {
    this.implementation.receive(message);
    this.notify();
  };

  public subscribe = (obs: BridgeObserver<TService>, ...args: unknown[]) => {
    const boundedObserver = obs.bind(this, ...args);
    this.observers = [...this.observers, boundedObserver];

    //unsubscribe callback, 외부에서 인라인 함수로 unsubscribe를 하지 못하기 때문에 이에 대해 대응
    return () => {
      const targetIndex = this.observers.indexOf(boundedObserver);
      this.observers = this.observers.filter((obs, idx) => idx !== targetIndex);
    };
  };

  protected notify = () => {
    this.observers.forEach((obs) => {
      obs.call(this);
    });
  };
}
