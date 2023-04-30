import { SVGIcon, SVGIconProps } from '@/components/UI/SVGIcon';

export * from './FooterContent';
export * from './FooterContent.styles';
import React from 'react';
import * as S from './FooterContent.styles';
import Link from 'next/link';
import { useNavigation } from '@/util/hooks/useNavigation';
import { useTheme } from '@emotion/react';
import { IconRegistryKey } from '@/components/UI/SVGIcon/SVGIcon.registry';

export type NavItemName = IconRegistryKey;
export type NavItemPath = `/${string}`;

export type NavItem<TName = NavItemName, TPath = NavItemPath> = { name: TName; path: TPath };
export const NAV_URL_ASSETS: Array<NavItem> = [
  { name: 'NavHomeIcon', path: '/' },
  { name: 'NavSettingIcon', path: '/setting' },
];

export type NavIconProps = {
  name: NavItemName;
  directionPath: NavItemPath;
} & Omit<SVGIconProps, 'color'>;

export const NavIcon = ({ name, directionPath, ...props }: NavIconProps) => {
  const { getCurrentPath, navigateTo } = useNavigation();
  const theme = useTheme();

  const handleRoute = () => {
    navigateTo(directionPath);
  };

  const totalColor =
    getCurrentPath() === directionPath ? theme.color.nav.active : theme.color.nav.disabled;

  return <SVGIcon name={name} {...props} onClick={handleRoute} fill={totalColor} />;
};

export const FooterContent = () => {
  return (
    <S.Wrapper as={'ul'} flex={'rowCenter'}>
      {NAV_URL_ASSETS.map((item) => {
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
