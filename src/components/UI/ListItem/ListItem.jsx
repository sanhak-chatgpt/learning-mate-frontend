import React, { ReactNode, useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './ListItem.style';

export const ListItem = ({ title, description, icon }) => {

  const [renderedContent, setRenderedContent] = useState(null);

  setRenderedContent(
    <S.ListItemWrapper>
    {icon && <S.IconStyle>{icon}</S.IconStyle>}
    <div>
      <S.TitleStyle icon={icon}>{title}</S.TitleStyle>
      {description && <S.DescriptionStyle>{description}</S.DescriptionStyle>}
    </div>
    </S.ListItemWrapper>)

  return<>{renderedContent}</>;
};

ListItem.propTypes = {
  title: PropTypes.ReactNode,
  description: PropTypes.ReactNode,
  icon: PropTypes.ReactNode
};

export default ListItem;