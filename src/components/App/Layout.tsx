import styled from '@emotion/styled';
import { Flex } from '../UI/FlexBox';
import React, { ReactNode } from 'react';
import { AppHeader } from '@/components/App/AppHeader';
import { AppFooter } from '@/components/App/AppFooter';
import { AppContent } from '@/components/App/AppContent';
import { FooterContent } from '@/components/App/AppFooter/FooterContent';

export const Container = styled.section`
  width: 100%;
  min-height: 100%;

  padding-right: constant(safe-area-inset-right);
  padding-left: constant(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  padding-left: env(safe-area-inset-left);
`;

export type LayoutProps = {
  children?: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <AppHeader />
      <AppContent>{children}</AppContent>
      <AppFooter />
    </Container>
  );
};
