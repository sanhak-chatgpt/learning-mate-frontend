import React, { useState } from 'react';
import { SVGIcon, SVGIconProps } from '@/components/UI/SVGIcon';
import * as S from './CircleIconChip.styles';

export type CircleIconChipProps = SVGIconProps;

const CircleIconChip = (props: CircleIconChipProps) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  return (
    <S.Root>
      <S.Wrapper
        flex={'rowCenter'}
        isToggled={isToggled}
        onClick={() => setIsToggled((prev) => !prev)}>
        <SVGIcon {...props}></SVGIcon>
      </S.Wrapper>
    </S.Root>
  );
};

export default CircleIconChip;
