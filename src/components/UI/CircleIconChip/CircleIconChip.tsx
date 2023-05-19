import React, { useState } from 'react';
import { SVGIcon, SVGIconProps } from '@/components/UI/SVGIcon';
import * as S from './CircleIconChip.styles';
import { CircleIconContext } from './CircleIconContext';

export type CircleIconChipProps = SVGIconProps

const CircleIconChip = (props: CircleIconChipProps) => {
  const context = React.useContext(CircleIconContext)
  const [isToggled, setIsToggled] = useState<boolean>(false)

  if(!context){
    return(
      <S.Root>
        <S.Wrapper
          flex={'rowCenter'}
          isToggled={isToggled}
          onClick={() => setIsToggled((prev) => !prev)}
        >
          <SVGIcon {...props}></SVGIcon>
        </S.Wrapper>
      </S.Root>
    )
  }

  const { isChecked, toggleValue } = context;
  
  return (
    <S.Root>
      <S.Wrapper
        flex={'rowCenter'}
        isToggled={isToggled}
        onClick={() => setIsToggled((prev) => !prev)} >
        <SVGIcon {...props}></SVGIcon>
      </S.Wrapper>
    </S.Root>
  );
};

export default CircleIconChip;
