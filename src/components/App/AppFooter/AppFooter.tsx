import React, { HTMLAttributes } from 'react';
import * as S from './AppFooter.styles';

export type AppFooterProps = {
  children?: React.ReactNode;
} & HTMLAttributes<HTMLElement>;

export const AppFooter = ({ children, ...rest }: AppFooterProps) => {
  return (
    <S.Root {...rest}>
      <S.Wrapper>{children}</S.Wrapper>
    </S.Root>
  );
};

export default AppFooter;
