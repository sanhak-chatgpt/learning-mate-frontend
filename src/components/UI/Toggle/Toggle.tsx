import { PropsWithChildren, useState } from 'react';
import * as S from './Toggle.styles';

export type ToggleProps = PropsWithChildren<{
  toggleCallback?: (...args: any) => void;
  isToggled: boolean;
}>;

export const Toggle = ({ toggleCallback, isToggled }: ToggleProps) => {
  const toggleHandler = () => {
    toggleCallback?.();
  };

  return (
    <>
      <S.Container onClick={toggleHandler}>
        <S.ToggleWrapper isToggled={isToggled} />
        <S.ToggleCircle isToggled={isToggled} />
      </S.Container>
    </>
  );
};
