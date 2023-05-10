import React, { useState } from 'react';
import { SVGIcon, SVGIconProps } from '@/components/UI/SVGIcon';
import * as S from './CircleIconChip.styles';
import { setActiveIcon } from '@/states/actions';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentIndex } from '@/states/store/componentSlice';
import { ComponentsState } from '@/states/store/componentSlice';

export type CircleIconChipProps = SVGIconProps & {
  index: number;
};

const dispatch = useDispatch();
export const currentIndex = useSelector((state: ComponentsState) => state.currentIndex);

const handleClickIcon = (index: number) =>{
  dispatch(setCurrentIndex(index));
};

const CircleIconChip = (props: CircleIconChipProps) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  return (
    <S.Root>
      <S.Wrapper
        flex={'rowCenter'}
        index={props.index}
        onClick={handleClickIcon(props.index)}>
        <SVGIcon {...props}></SVGIcon>
      </S.Wrapper>
    </S.Root>
  );
};

export default CircleIconChip;
