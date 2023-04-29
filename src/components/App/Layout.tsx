import styled from '@emotion/styled';
import { Flex } from '../UI/FlexBox';
import React, { ReactNode } from 'react';
import { AppHeader } from '@/components/App/AppHeader';
import { AppFooter } from '@/components/App/AppFooter';
import { AppContent } from '@/components/App/AppContent';
import HeaderContent from '@/components/App/AppHeader/HeaderContent/HeaderContent';
import { FooterContent } from '@/components/App/AppFooter/FooterContent';

export const Wrapper = styled(Flex)`
  width: 100%;
  min-height: 100%;
`;

export type LayoutProps = {
  children?: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper flex="columnStart">
      <AppHeader>
        <HeaderContent></HeaderContent>
      </AppHeader>
      <AppContent>{children}</AppContent>
      <AppFooter>
        <FooterContent></FooterContent>
      </AppFooter>
    </Wrapper>
  );
};
