import React from 'react';
import * as S from './HeaderContent.styles';
import { useHeader } from '@/components/App/AppHeader/HeaderContent/HeaderContent.hooks';
import { BackwardContainer } from './HeaderContent.styles';
import { SVGIcon } from '@/components/UI/SVGIcon';
import { useNavigation } from '@/util/hooks/useNavigation';
import { HeaderBackArrow } from '@/components/UI/SVGIcon/templates';

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
      <S.Container>
        <S.Wrapper flex={'columnStart'}>
          {headerContent.state === 'feedback' && <HeaderBackward />}
          <RenderTitle></RenderTitle>
          <RenderDescription></RenderDescription>
        </S.Wrapper>
      </S.Container>
    </S.Root>
  );
};

export const HeaderBackward = () => {
  const { router } = useNavigation();
  const handlePrevPage = () => {
    router.back();
  };

  return (
    <BackwardContainer flex={'rowStart'}>
      <SVGIcon
        name={'HeaderBackArrow'}
        onClick={handlePrevPage}
        width={10}
        height={16}
        viewBox={'0 0 10 16'}></SVGIcon>
    </BackwardContainer>
  );
};

export default HeaderContent;
