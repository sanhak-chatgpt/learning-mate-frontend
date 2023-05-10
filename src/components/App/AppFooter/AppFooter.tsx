import React from 'react';
import * as S from './AppFooter.styles';
import { useRecoilValue } from 'recoil';
import { footerConfigurationState } from '@/states/state.footer';
import { FooterContent } from '@/components/App/AppFooter/FooterContent';

export const AppFooter = () => {
  const footerConfig = useRecoilValue(footerConfigurationState);

  return (
    <S.Root isVisible={footerConfig.isVisible}>
      <S.Wrapper>
        <FooterContent />
      </S.Wrapper>
    </S.Root>
  );
};

export default AppFooter;
