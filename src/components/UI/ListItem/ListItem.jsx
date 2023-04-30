import React, { ReactNode, useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './ListItem.style';

export const ListItem = ({ title, description, icon }) => {

  return(
    <S.ListItemWrapper flex={'rowStart'}>
      {icon && <S.IconStyle>{icon}</S.IconStyle>}
      <div flex={'columStart'}>
        <S.TitleStyle>{title}</S.TitleStyle>
        {description && <S.DescriptionStyle>{description}</S.DescriptionStyle>}
      </div>
    </S.ListItemWrapper>
  )
};

ListItem.propTypes = {
  title: PropTypes.ReactNode,
  description: PropTypes.ReactNode,
  icon: PropTypes.ReactNode
};

export default ListItem;