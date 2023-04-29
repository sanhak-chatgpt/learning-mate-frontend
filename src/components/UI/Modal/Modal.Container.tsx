import React, { cloneElement, useEffect } from 'react';
import {
  DynamicImporter,
  ModalRegistry,
  OpenModalPayloadWithId,
  OverlayOptions,
} from '@/components/UI/Modal/Modal.types';
import styled from '@emotion/styled';
import { useModalContext } from '@/components/UI/Modal/Modal.hooks';

interface ModalOverlayProps extends OverlayOptions {
  closeSelf: () => void;
  children: React.ReactElement;
}

export const ModalOverlay = ({
  className = '',
  closeDelay = 0,
  closeOnOverlayClick = true,
  dim = true,
  preventScroll = true,
  children,
  closeSelf,
}: ModalOverlayProps) => {
  // animated close
  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    window.requestAnimationFrame(() => setVisible(true));
  }, []);

  const delayedClose = () => {
    setVisible(false);
    setTimeout(closeSelf, closeDelay);
  };

  const onClick = (e: React.MouseEvent) => {
    if (!closeOnOverlayClick) return;
    if (e.target === e.currentTarget) {
      delayedClose();
    }
  };

  useEffect(() => {
    if (preventScroll) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'initial';
      };
    }
  }, []);

  return (
    <OverlayRoot dim={dim} onClick={onClick}>
      {cloneElement(children, { close: delayedClose, visible })}
    </OverlayRoot>
  );
};

const OverlayRoot = styled.div<{ dim: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  ${({ theme, dim }) => {
    return `
      ${dim && 'background: rgba(22, 29, 36, 0.4);'}
    '}
    `;
  }}
`;

type OpenedModalProps<R extends ModalRegistry> = OpenModalPayloadWithId<R, keyof R> & {
  importer: DynamicImporter;
};
export const OpenedModal = <R extends ModalRegistry>({
  importer,
  type,
  id,
  props,
  overlayOptions,
  events,
}: OpenedModalProps<R>) => {
  const { closeModal } = useModalContext();
  const [Component, setComponent] = React.useState<React.ComponentType>();

  // asynchronously import modal file: for reduce bundle size.
  // this may trigger initial openModal could be delayed.
  // if you don't want to be delayed, use usePreloadModal hook
  useEffect(() => {
    importer().then((modal) => {
      setComponent(() => modal.default);
    });
  }, [type]);

  const closeModalBySelf = () => {
    events?.onClose?.();
    closeModal({ id });
  };

  if (!Component) return null;
  return (
    <ModalOverlay {...overlayOptions} closeSelf={closeModalBySelf}>
      <Component {...props} />
    </ModalOverlay>
  );
};

interface ModalContainerProps<R extends ModalRegistry> {
  registry: R;
  openedModals: OpenModalPayloadWithId<R, keyof R>[];
}
export const ModalContainer = <R extends ModalRegistry>({
  registry,
  openedModals,
}: ModalContainerProps<R>) => {
  return (
    <div id="modal-root">
      {openedModals.map((modalState) => {
        const props: OpenedModalProps<typeof registry> = {
          importer: registry[modalState.type],
          ...modalState,
        };
        return <OpenedModal key={modalState.id} {...props} />;
      })}
    </div>
  );
};

export default ModalContainer;
