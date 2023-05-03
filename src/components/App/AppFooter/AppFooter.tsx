import React, { HTMLAttributes } from 'react';
import * as S from './AppFooter.styles';
import { useNavigation } from '@/util/hooks/useNavigation';

export type AppFooterProps = {
  children?: React.ReactNode;
} & HTMLAttributes<HTMLElement>;

export const AppFooter = ({ children, ...rest }: AppFooterProps) => {
  const { getCurrentPath } = useNavigation();
  console.log(getCurrentPath());
  return (
    <>
      {getCurrentPath() !== '/feedback' ? (
        <S.Root {...rest}>
          <S.Wrapper>{children}</S.Wrapper>
        </S.Root>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default AppFooter;
