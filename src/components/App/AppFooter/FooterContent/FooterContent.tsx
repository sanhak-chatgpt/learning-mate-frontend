import { IconName, SVGIcon, SVGIconProps } from '@/components/UI/SVGIcon';

export * from './FooterContent';
export * from './FooterContent.styles';
import React, { Fragment } from 'react';
import * as S from './FooterContent.styles';
import Link from 'next/link';
import { useNavigation } from '@/util/hooks/useNavigation';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

export type NavItemName = IconName;
export type NavItemPath = `/${string}`;

export type NavItem<TName = NavItemName, TPath = NavItemPath> = { name: TName; path: TPath };
export const NAV_URL_ASSETS: Array<NavItem> = [
  { name: 'nav_home', path: '/' },
  { name: 'nav_setting', path: '/setting' },
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

  console.log(directionPath);
  console.log(getCurrentPath());

  const totalColor =
    getCurrentPath() === directionPath ? theme.color.nav.active : theme.color.nav.disabled;

  return <SVGIcon {...props} color={totalColor} onClick={handleRoute} />;
};

export const FooterContent = () => {
  return (
    <S.Wrapper as={'ul'} flex={'rowCenter'}>
      {NAV_URL_ASSETS.map((item) => {
        return (
          <S.IconContainer as={'li'} flex={'rowCenter'} key={item.name}>
            <Link href={item.path}>
              <NavIcon
                iconName={item.name}
                size={{ width: 22, height: 24 }}
                name={item.name}
                directionPath={item.path}
              />
            </Link>
          </S.IconContainer>
        );
      })}
    </S.Wrapper>
  );
};

export default FooterContent;
