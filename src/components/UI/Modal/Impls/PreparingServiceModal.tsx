import React from 'react';
import * as S from '@/components/UI/Modal/Impls/BasicModal.styles';
import { DefaultModalProps } from '@/components/UI/Modal/Modal.types';

export type PreParingModalProps = object & DefaultModalProps;

export const PreParingServiceModal = ({ visible, close }: PreParingModalProps) => {
  const vis = visible ? 'true' : 'false';
  return (
    <S.Root>
      <S.Container flex={'rowCenter'} visible={vis}>
        <S.Wrapper flex={'columnStart'}>
          <header>
            앗, 열심히 준비하고 있어요.
            <br />
            잠시만 기다려주세요!
          </header>
          <footer>
            <S.ModalButton as={'button'} flex={'rowCenter'} onClick={close}>
              확인
            </S.ModalButton>
          </footer>
        </S.Wrapper>
      </S.Container>
    </S.Root>
  );
};

export default PreParingServiceModal;
