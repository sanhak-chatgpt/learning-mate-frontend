import React, { ReactNode, useState, useEffect } from 'react';
import * as S from '@/components/UI/Modal/Impls/BasicModal.styles';
import { DefaultModalProps } from '@/components/UI/Modal/Modal.types';
import CircleIconChip from '@/components/UI/CircleIconChip/CircleIconChip';
import { IconContainer } from '@/components/UI/Modal/Impls/FeedbackResultHelpfulnessModal.styles';
import { useDispatch } from 'react-redux';

export type FeedbackHelpModalProps = {
  title: string;
} & DefaultModalProps;
/* 
export let IconIndex = Array(5).fill(false);

export const handleClickIcon = (index: number) => {
  if ( IconIndex[index] == true ){
    IconIndex = Array(5).fill(false);
  }
  else{
    IconIndex = Array(5).fill(false);
    IconIndex[index] =true;
  }
}; */
/* 
export const handleClick = (index: number) => {
  console.log("click icon zz")
  console.log(index)
  console.log(IconIndex)
  if ( IconIndex[index] == true ){
    console.log("true")
    IconIndex = Array(5).fill(false);
  }
  else{
    console.log("false")
    IconIndex = Array(5).fill(false);
    IconIndex[index] =true;
  }
  console.log(IconIndex)
}; */

const FeedbackResultHelpfulnessModal = ({ title, visible, close }: FeedbackHelpModalProps) => {
  const [iconIndex, setIconIndex] = useState([false, false, false, false, false]);

  const handleIconClick = (index: number) => {
    let updatedIndex = [...iconIndex];
    if( updatedIndex[index] == true ){  updatedIndex[index]= false; }
    else{ 
      updatedIndex = Array(5).fill(false);
      updatedIndex[index]=true;
    }
    console.log(updatedIndex);
    setIconIndex(updatedIndex);
  }

  return (
    <S.Root>
      <S.Container flex={'rowCenter'} visible={visible}>
        <S.Wrapper flex={'columnStart'}>
          <header>{title}</header>
          <IconContainer as={'main'} flex={'rowCenter'} >
            <CircleIconChip name={'faceWorst'} width={20} height={20} viewBox={'0 0 20 20'} index={0} handleclick={handleIconClick} iconList={iconIndex} />
            <CircleIconChip name={'faceBad'} width={20} height={20} viewBox={'0 0 20 20'} index={1} handleclick={handleIconClick} iconList={iconIndex} />
            <CircleIconChip name={'faceNormal'} width={20} height={20} viewBox={'0 0 20 20'} index={2} handleclick={handleIconClick} iconList={iconIndex} />
            <CircleIconChip name={'faceGood'} width={20} height={20} viewBox={'0 0 20 20'} index={3} handleclick={handleIconClick} iconList={iconIndex} />
            <CircleIconChip name={'faceBest'} width={20} height={20} viewBox={'0 0 20 20'} index={4} handleclick={handleIconClick} iconList={iconIndex} />
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
