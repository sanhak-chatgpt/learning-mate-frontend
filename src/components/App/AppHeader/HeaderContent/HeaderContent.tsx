import React, { useCallback } from 'react';
import * as S from './HeaderContent.styles';
import { useHeader } from '@/components/App/AppHeader/HeaderContent/HeaderContent.hooks';
import { HeaderBackward } from '@/components/App/AppHeader/HeaderContent/HeaderBackward';

export const HeaderContent = () => {
  const { headerContent } = useHeader();

  const EvaluatedTitle = useCallback((): JSX.Element => {
    if (typeof headerContent.title === 'string') {
      return <h1>{headerContent.title}</h1>;
    }
    return <headerContent.title />;
  }, [headerContent]);

  const EvaluatedDescription = useCallback((): JSX.Element => {
    if (typeof headerContent.description === 'string') {
      return <h2>{headerContent.description}</h2>;
    }
    return <headerContent.description />;
  }, [headerContent]);

  return (
    <S.Root>
      <S.Container flex={'columnStart'}>
        <HeaderBackward
          visible={headerContent.backward.visible}
          historyStack={headerContent.backward.historyStack}
        />
        <EvaluatedTitle />
        <EvaluatedDescription />
      </S.Container>
    </S.Root>
  );
};

export default HeaderContent;
