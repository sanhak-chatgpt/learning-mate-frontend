import { Flex } from '@/components/FlexBox';
import styled from '@emotion/styled';

export const Root = styled.header`
  width: 100%;
  height: 64px;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
`;

export const Wrapper = styled(Flex)`
  background-color: ${({ theme }) => `${theme.color.background.paper}`};
  box-shadow: ${({ theme }) => `${theme.shadow.default}`};
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 45rem;
  width: 100%;
  height: 100%;
`;
