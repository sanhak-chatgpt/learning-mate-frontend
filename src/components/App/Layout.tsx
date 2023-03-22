import styled from '@emotion/styled';
import { Flex } from '../FlexBox';
import { ReactNode } from 'react';

export const Wrapper = styled(Flex)`
  width: 100%;
  height: 100%;
`;

export type LayoutProps = {
  children?: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return <Wrapper flex='columnStart'>{children}</Wrapper>;
};
