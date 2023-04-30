import { Flex } from '../../UI/FlexBox';
import styled from '@emotion/styled';

export const Root = styled.header`
  width: 100vw;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
`;

export const Wrapper = styled(Flex)`
  background-color: ${({ theme }) => `${theme.color.background.default}`};
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
