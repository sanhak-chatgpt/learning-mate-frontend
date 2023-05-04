import * as S from './BasicModal.styles';
import { DefaultModalProps } from '@/components/UI/Modal/Modal.types';
import React from 'react';

export type BasicModalProps = {
  title: string;
} & DefaultModalProps;

export const BasicModal = ({ visible, close, title = '테스트' }: BasicModalProps) => {
  return (
    <S.Root>
      <S.Container flex={'rowCenter'} visible={visible}>
        <S.Wrapper flex={'columnStart'}>
          <header>{title}</header>
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

export default BasicModal;
