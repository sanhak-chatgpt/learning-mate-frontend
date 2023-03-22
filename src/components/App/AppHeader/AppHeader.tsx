import react, { ReactNode } from 'react';

import * as S from '.';

export type HeaderProps = {
  children?: ReactNode;
};

export const DEFAULT_HEADER_CONTENT = <div>uninitialized header</div>;

export const AppHeader = ({
  children = DEFAULT_HEADER_CONTENT,
}: HeaderProps) => {
  return (
    <S.Root>
      <S.Wrapper as='div' flex='rowCenter'>
        <S.Container>{children}</S.Container>
      </S.Wrapper>
    </S.Root>
  );
};
