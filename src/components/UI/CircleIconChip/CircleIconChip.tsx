import React, { ReactNode, useState, useEffect } from 'react';
import { SVGIcon, SVGIconProps } from '@/components/UI/SVGIcon';
import * as S from './CircleIconChip.styles';

export type CircleIconChipProps = SVGIconProps & {
  index: number;
  handleclick: (index: number) => void;
  iconList: boolean[];
};
/* 
const dispatch = useDispatch();
export const currentIndex = useSelector((state: ComponentsState) => state.currentIndex);

const handleClickIcon = (index: number) =>{
  dispatch(setCurrentIndex(index));
}; */


const CircleIconChip = (props: CircleIconChipProps) => {
  
  return (
    <S.Root>
      <S.Wrapper
        flex={'rowCenter'}
        index={props.index}
        list={props.iconList}
        onClick={() => props.handleclick(props.index)} >
        <SVGIcon {...props}></SVGIcon>
      </S.Wrapper>
    </S.Root>
  );
};

export default CircleIconChip;
