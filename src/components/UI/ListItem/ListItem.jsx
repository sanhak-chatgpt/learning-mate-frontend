import React, { ReactNode }from 'react';
import PropTypes from 'prop-types';
import * as S from '.';
import { DescriptionStyle, DescriptionWithIconStlye, IconStyle, ListItemWrapper, ListItemWrapperOnlyTitle, ListItemWrapperWithIcon, TitleOnlyStyle, TitleStyle, TitleWithIconStyle } from './ListItem.style';

function ListItem(props) {
  const { title, description, icon } = props;

  let content;
  if (icon) {
    content = (
        <S.ListItemWrapperWithIcon>
            <S.IconStyle>{icon}</S.IconStyle>
            <S.TitleWithIconStyle>{title}</S.TitleWithIconStyle>
            <S.DescriptionWithIconStlye>{description}</S.DescriptionWithIconStlye>
        </S.ListItemWrapperWithIcon>
    );
  } else if (description) {
    content = (
      <S.ListItemWrapper>
        <S.TitleStyle>{title}</S.TitleStyle>
        <S.DescriptionStyle>{description}</S.DescriptionStyle>
      </S.ListItemWrapper>
    );
  } else {
    content = (
      <S.ListItemWrapperOnlyTitle>
        <S.TitleOnlyStyle>{title}</S.TitleOnlyStyle>
      </S.ListItemWrapperOnlyTitle>
    );
  }

  return <>{content}</>;
}

ListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string
};

export default ListItem;