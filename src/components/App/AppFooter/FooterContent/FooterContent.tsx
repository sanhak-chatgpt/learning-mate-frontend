import React from 'react';
import Link from 'next/link';
import { IconRegistryKey } from '@/components/UI/SVGIcon/SVGIcon.registry';
import { SVGIcon, SVGIconProps } from '@/components/UI/SVGIcon';
import * as S from './FooterContent.styles';
import { useNavIcon } from './FooterContent.hooks';

export type NavItemPath = `/${string}`;

export type NavItem<TName = IconRegistryKey, TPath = NavItemPath> = { name: TName; path: TPath };
export const NAV_ITEM_PRESET: Array<NavItem> = [
  { name: 'NavHomeIcon', path: '/' },
  { name: 'RankingTrophy', path: '/ranking' },
  { name: 'NavSettingIcon', path: '/setting' },
];

export type NavIconProps = {
  name: IconRegistryKey;
  directionPath: NavItemPath;
} & Omit<SVGIconProps, 'color'>;

export const NavIcon = ({ name, directionPath, ...props }: NavIconProps) => {
  const { handleNavigation, evaluatedIconColor } = useNavIcon(directionPath);

  return <SVGIcon name={name} {...props} onClick={handleNavigation} fill={evaluatedIconColor} />;
};

export const FooterContent = () => {
  return (
    <S.Wrapper as={'ul'} flex={'rowCenter'}>
      {NAV_ITEM_PRESET?.map((item) => {
        return (
          <S.IconContainer as={'li'} flex={'rowCenter'} key={item.name}>
            <Link href={item.path}>
              <NavIcon name={item.name} width={24} height={24} directionPath={item.path} />
            </Link>
          </S.IconContainer>
        );
      })}
    </S.Wrapper>
  );
};

export default FooterContent;
