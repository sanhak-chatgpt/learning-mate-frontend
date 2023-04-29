export * from './FooterContent';
export * from './FooterContent.styles';
import React from 'react';
import * as S from './FooterContent.styles';
import nav_home_icon from '../../../../../public/icons/nav_home_icon.svg';
import nav_setting_icon from '../../../../../public/icons/nav_setting_icon.svg';
export const FooterContent = () => {
  return (
    <S.Wrapper as={'ul'} flex={'columnCenter'}>
      <S.IconContainer as={'li'} flex={'rowCenter'}></S.IconContainer>
    </S.Wrapper>
  );
};

export default FooterContent;
