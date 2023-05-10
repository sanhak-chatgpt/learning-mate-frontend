import React from 'react';
import * as S from '@/components/UI/Modal/Impls/BasicModal.styles';
import { DefaultModalProps } from '@/components/UI/Modal/Modal.types';
import CircleIconChip from '@/components/UI/CircleIconChip/CircleIconChip';
import { IconContainer } from '@/components/UI/Modal/Impls/FeedbackResultHelpfulnessModal.styles';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentIndex } from '@/states/store/componentSlice';
import { ComponentsState } from '@/states/store/componentSlice';

export type FeedbackHelpModalProps = {
  title: string;
} & DefaultModalProps;

const dispatch = useDispatch();
export const currentIndex = useSelector((state: ComponentsState) => state.currentIndex);

const handleClickIcon = (index: number) =>{
  dispatch(setCurrentIndex(index));
};

const FeedbackResultHelpfulnessModal = ({ title, visible, close }: FeedbackHelpModalProps) => {
  return (
    <S.Root>
      <S.Container flex={'rowCenter'} visible={visible}>
        <S.Wrapper flex={'columnStart'}>
          <header>{title}</header>
          <IconContainer as={'main'} flex={'rowCenter'}>
            <CircleIconChip name={'faceWorst'} width={20} height={20} viewBox={'0 0 20 20'} index={0} />
            <CircleIconChip name={'faceBad'} width={20} height={20} viewBox={'0 0 20 20'} index={1} />
            <CircleIconChip name={'faceNormal'} width={20} height={20} viewBox={'0 0 20 20'} index={2} />
            <CircleIconChip name={'faceGood'} width={20} height={20} viewBox={'0 0 20 20'} index={3} />
            <CircleIconChip name={'faceBest'} width={20} height={20} viewBox={'0 0 20 20'} index={4} />
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
