import {
  CloseModalPayload,
  ModalRegistry,
  OpenModalPayload,
  OpenModalPayloadWithId,
  OverlayOptions,
} from '@/components/UI/Modal/Modal.types';
import React from 'react';
import { getRandomHex } from '@/util/models/Number';

export const ACTION_TYPE_MODAL_CLOSE = 'CLOSE';
export const ACTION_TYPE_MODAL_OPEN = 'OPEN';
export const ACTION_TYPE_MODAL_CLOSE_ALL = 'CLOSE_ALL';

export const useModalReducer = <R extends ModalRegistry>(
  defaultOverlayOptions?: { default?: Partial<OverlayOptions> } & {
    [key in keyof R]?: Partial<OverlayOptions>;
  }
) => {
  const modalReducer = (state: OpenModalPayloadWithId<R, keyof R>[], action: ModalActions) => {
    switch (action.type) {
      case ACTION_TYPE_MODAL_OPEN:
        return [...state, action.payload];
      case ACTION_TYPE_MODAL_CLOSE:
        return state.filter((modal) => modal.id !== action.payload.id);
      case ACTION_TYPE_MODAL_CLOSE_ALL:
        return [];
    }
  };

  const [openedModals, dispatch] = React.useReducer(
    modalReducer,
    [] as OpenModalPayloadWithId<R, keyof R>[]
  );

  const openModal = (externalPayload: OpenModalPayload<R, keyof R>) => {
    const modalId = getRandomHex();

    return {
      type: ACTION_TYPE_MODAL_OPEN as 'OPEN',
      payload: {
        type: externalPayload.type,
        props: externalPayload.props,
        overlayOptions: Object.assign(
          {},
          defaultOverlayOptions?.default,
          defaultOverlayOptions?.[externalPayload.type],
          externalPayload.overlayOptions
        ),
        events: externalPayload.events,
        id: modalId,
      } as OpenModalPayloadWithId<R, keyof R>,
    };
  };

  const closeModal = (payload: CloseModalPayload) => {
    return { type: ACTION_TYPE_MODAL_CLOSE as 'CLOSE', payload };
  };

  const closeAllModal = () => {
    return { type: ACTION_TYPE_MODAL_CLOSE_ALL as 'CLOSE_ALL' };
  };

  type ModalActions = ReturnType<typeof openModal | typeof closeModal | typeof closeAllModal>;

  const WrappedActions = {
    openModal: (payload: OpenModalPayload<R, keyof R>) => {
      const action = openModal(payload);
      dispatch(action);
      return action.payload;
    },
    closeModal: (payload: CloseModalPayload) => {
      const action = closeModal(payload);
      dispatch(action);
      return { id: action.payload.id };
    },
    closeAllModal: () => {
      const action = closeAllModal();
      dispatch(action);
    },
  };

  return { openedModals, ...WrappedActions };
};
