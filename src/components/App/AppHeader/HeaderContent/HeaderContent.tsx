import React from 'react';
import * as S from './HeaderContent.styles';
import { useHeader } from '@/components/App/AppHeader/HeaderContent/HeaderContent.hooks';

export const HeaderContent = () => {
  const { headerContent } = useHeader();

  const RenderTitle = (): JSX.Element => {
    if (typeof headerContent.title === 'string') {
      return <h1>{headerContent.title}</h1>;
    }
    return <headerContent.title />;
  };

  const RenderDescription = (): JSX.Element => {
    if (typeof headerContent.description === 'string') {
      return <h2>{headerContent.description}</h2>;
    }
    return <headerContent.description />;
  };

  return (
    <S.Root>
      <S.Wrapper flex={'columnStart'}>
        <RenderTitle></RenderTitle>
        <RenderDescription></RenderDescription>
      </S.Wrapper>
    </S.Root>
  );
};

export default HeaderContent;
