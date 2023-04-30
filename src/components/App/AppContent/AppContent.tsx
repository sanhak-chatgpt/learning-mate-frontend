import React, { ReactNode } from 'react';
import * as S from './AppContent.styles';

export type ContentProps = {
  children?: ReactNode;
};

export const AppContent = ({ children }: ContentProps) => {
  return (
    <S.Root>
      <S.Wrapper>{children}</S.Wrapper>
    </S.Root>
  );
};
