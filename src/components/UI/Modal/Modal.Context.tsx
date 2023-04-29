import {
  CloseModalPayload,
  ModalRegistry,
  OpenModalPayload,
  OpenModalPayloadWithId,
  OverlayOptions,
} from '@/components/UI/Modal/Modal.types';
import React, { createContext, PropsWithChildren, useContext } from 'react';
import { useModalReducer } from '@/components/UI/Modal/Modal.reducer';
import ModalContainer from '@/components/UI/Modal/Modal.Container';

export type ModalContextType<R extends ModalRegistry> = {
  openedModals: OpenModalPayload<R, keyof R>[];
  openModal: <T extends keyof R>(
    payload: OpenModalPayload<R, T>
  ) => OpenModalPayloadWithId<R, keyof R>;
  closeModal: (payload: CloseModalPayload) => { id: string };
  closeAllModal: () => void;
};

export const createModalContext = <R extends ModalRegistry>() =>
  createContext<ModalContextType<R>>({
    openedModals: [],
    openModal: (payload) => ({ ...payload, id: '' }),
    closeModal: (payload: CloseModalPayload) => {
      return { id: '' };
    },
    closeAllModal: () => {
      return;
    },
  });

export const ModalContext = createModalContext();

export type ModalProviderProps<R extends ModalRegistry> = {
  registry: R;
  defaultOverlayOptions?: { default?: Partial<OverlayOptions> } & {
    [key in keyof R]?: Partial<OverlayOptions>;
  };
};

export const ModalProvider = <R extends ModalRegistry>({
  registry,
  defaultOverlayOptions,
  children,
}: PropsWithChildren<ModalProviderProps<R>>) => {
  const { openedModals, ...actions } = useModalReducer<R>(defaultOverlayOptions);

  const TypedModalContext = ModalContext as React.Context<ModalContextType<R>>;

  return (
    <TypedModalContext.Provider value={{ openedModals, ...actions }}>
      {children}
      <ModalContainer registry={registry} openedModals={openedModals} />
    </TypedModalContext.Provider>
  );
};
