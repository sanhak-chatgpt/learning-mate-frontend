import React, { ReactNode, useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './ListItem.style';

export const ListItem = ({ title, description, icon }) => {

  const [renderedContent, setRenderedContent] = useState(null);

  if (icon) {
    setRenderedContent(
      <S.ListItemWrapperWithIcon>
        <S.IconStyle>{icon}</S.IconStyle>
        <S.TitleWithIconStyle>{title}</S.TitleWithIconStyle>
        <S.DescriptionWithIconStlye>{description}</S.DescriptionWithIconStlye>
      </S.ListItemWrapperWithIcon>
    );
  } else if (description) {
    setRenderedContent(
      <S.ListItemWrapper>
        <S.TitleStyle>{title}</S.TitleStyle>
        <S.DescriptionStyle>{description}</S.DescriptionStyle>
      </S.ListItemWrapper>
    );
  } else {
    setRenderedContent(
      <S.ListItemWrapperOnlyTitle>
        <S.TitleOnlyStyle>{title}</S.TitleOnlyStyle>
      </S.ListItemWrapperOnlyTitle>
    );
  }

  return <>{renderedContent}</>;
}

ListItem.propTypes = {
  title: PropTypes.ReactNode,
  description: PropTypes.ReactNode,
  icon: PropTypes.ReactNode
};

export default ListItem;