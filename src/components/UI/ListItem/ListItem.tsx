import React from 'react';
import * as S from './ListItem.styles';
import { SVGIcon } from '@/components/UI/SVGIcon';
import { IconRegistryKey } from '@/components/UI/SVGIcon/SVGIcon.registry';

export type ListItemTitle = string;
export type ListItemDescription = string;

export type ListItemProps = {
  title: ListItemTitle;
  description?: ListItemDescription;
  icon?: { name: IconRegistryKey; width: string | number; height: string | number };
};

export const ListItem = ({ title, description, icon }: ListItemProps) => {
  const Icon = !!icon
    ? () => <SVGIcon name={icon.name} height={icon.height} width={icon.width} />
    : null;

  return (
    <S.ListItemRoot>
      <S.ListItemWrapper flex={'rowStart'}>
        {Icon && (
          <S.IconContainer flex={'rowCenter'}>
            <Icon />
          </S.IconContainer>
        )}
        <S.TextContainer flex={'columnStart'}>
          <h3>{title}</h3>
          {description && <h4>{description}</h4>}
        </S.TextContainer>
      </S.ListItemWrapper>
    </S.ListItemRoot>
  );
};

export default ListItem;
