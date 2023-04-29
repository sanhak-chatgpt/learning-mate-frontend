export type DynamicImporter = () => Promise<{ default: React.ComponentType<any> }>;

export interface ModalRegistry {
  [key: string]: DynamicImporter;
}

type Await<T> = T extends PromiseLike<infer U> ? U : T;
type EmptyObject = Record<string, never>;

export type ModalProps<TImporter extends DynamicImporter> = React.ComponentProps<
  Await<ReturnType<TImporter>>['default']
>;

export type DefaultModalProps = {
  close(): void;
  visible: boolean;
};

export type ModalOwnProps<TImporter extends DynamicImporter> = Omit<
  ModalProps<TImporter>,
  keyof DefaultModalProps
>;

// from @type-challenges/utils
type Equals<X, Y> = (() => Y extends X ? 1 : 2) extends () => X extends Y ? 1 : 2 ? true : false;

export type OpenModalPayload<R extends ModalRegistry, Rkey extends keyof R> = Equals<
  ModalOwnProps<R[Rkey]>,
  EmptyObject
> extends true
  ? {
      type: Rkey;
      props?: ModalOwnProps<R[Rkey]>;
      overlayOptions?: OverlayOptions;
      events?: ModalEvents;
    }
  : {
      type: Rkey;
      props: ModalOwnProps<R[Rkey]>;
      overlayOptions?: OverlayOptions;
      events?: ModalEvents;
    };

export type OpenModalPayloadWithId<
  R extends ModalRegistry,
  Rkey extends keyof R
> = OpenModalPayload<R, Rkey> & {
  id: string;
};

export type CloseModalPayload = {
  id: string;
};

export interface OverlayOptions {
  className?: string;
  closeDelay?: number;
  closeOnOverlayClick?: boolean;
  dim?: boolean;
  preventScroll?: boolean;
}

export interface ModalEvents {
  onClose?(): void;
}
