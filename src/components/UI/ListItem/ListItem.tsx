import React from 'react';
import * as S from './ListItem.styles';
import { SVGIcon, ViewBoxSize } from '@/components/UI/SVGIcon';
import { IconRegistryKey } from '@/components/UI/SVGIcon/SVGIcon.registry';

export type ListItemTitle = string;
export type ListItemDescription = string;

export type ListItemProps = {
  title: ListItemTitle;
  description?: ListItemDescription;
  itemSize?: { width?: string; height?: string };
  icon?: {
    name: IconRegistryKey;
    width: string | number;
    height: string | number;
    viewBox?: ViewBoxSize;
  };
  onClick?: (...args: any) => void;
};

export const ListItem = ({ title, description, icon, onClick, itemSize }: ListItemProps) => {
  const IconRender = !!icon
    ? () => (
        <SVGIcon
          name={icon.name}
          height={icon.height}
          width={icon.width}
          viewBox={icon?.viewBox ?? '0 0 50 50'}
        />
      )
    : null;

  return (
    <S.ListItemRoot onClick={onClick} itemSize={itemSize}>
      <S.ListItemWrapper flex={'rowStart'}>
        {IconRender && (
          <S.IconContainer flex={'rowCenter'}>
            <IconRender />
          </S.IconContainer>
        )}
        <S.TextContainer flex={'columnCenter'}>
          <h3>{title}</h3>
          {description && <h4>{description}</h4>}
        </S.TextContainer>
      </S.ListItemWrapper>
    </S.ListItemRoot>
  );
};

export default ListItem;
