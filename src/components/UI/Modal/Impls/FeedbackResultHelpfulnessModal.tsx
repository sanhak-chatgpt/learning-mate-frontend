import React, { useState } from 'react';
import * as S from '@/components/UI/Modal/Impls/BasicModal.styles';
import { DefaultModalProps } from '@/components/UI/Modal/Modal.types';
import CircleIconChip from '@/components/UI/CircleIconChip/CircleIconChip';
import { IconContainer } from '@/components/UI/Modal/Impls/FeedbackResultHelpfulnessModal.styles';
import { CircleIconGroup } from '@/components/UI/CircleIconChip/CircleIconGroup';

export type FeedbackHelpModalProps = {
  title: string;
} & DefaultModalProps;

const FeedbackResultHelpfulnessModal = ({ title, visible, close }: FeedbackHelpModalProps) => {
  const [iconIndex, setIconIndex] = useState<string>("");

  return (
    <S.Root>
      <S.Container flex={'rowCenter'} visible={visible}>
        <S.Wrapper flex={'columnStart'}>
          <header>{title}</header>
          <IconContainer as={'main'} flex={'rowCenter'} >
            <CircleIconChip name={'faceWorst'} width={20} height={20} viewBox={'0 0 20 20'}  />
            <CircleIconChip name={'faceBad'} width={24} height={24} viewBox={'0 0 24 24'}  />
            <CircleIconChip name={'faceNormal'} width={24} height={24} viewBox={'0 0 24 24'}  />
            <CircleIconChip name={'faceGood'} width={24} height={24} viewBox={'0 0 24 24'}  />
            <CircleIconChip name={'faceBest'} width={20} height={20} viewBox={'0 0 20 20'}  />
          </IconContainer>
          <footer>
            <S.ModalButton as={'button'} flex={'rowCenter'} onClick={close}>
              홈으로 가기
            </S.ModalButton>
          </footer>
        </S.Wrapper>
      </S.Container>
    </S.Root>
  );
};

export default FeedbackResultHelpfulnessModal;
