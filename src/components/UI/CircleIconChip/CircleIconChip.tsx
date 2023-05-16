import React from 'react';
import { SVGIcon, SVGIconProps } from '@/components/UI/SVGIcon';
import * as S from './CircleIconChip.styles';

export type CircleIconChipProps = SVGIconProps & {
  index: number;
  handleclick: (index: number) => void;
  iconList: boolean[];
};

const CircleIconChip = (props: CircleIconChipProps) => {
  
  return (
    <S.Root>
      <S.Wrapper
        flex={'rowCenter'}
        index={props.index}
        list={props.iconList}
        isToggled={props.iconList[props.index]}
        onClick={() => props.handleclick(props.index)} >
        <SVGIcon {...props}></SVGIcon>
      </S.Wrapper>
    </S.Root>
  );
};

export default CircleIconChip;
