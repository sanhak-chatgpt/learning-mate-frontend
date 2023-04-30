import styled from '@emotion/styled';
import { Flex } from '@/components/UI/FlexBox';

export const Wrapper = styled(Flex)`
  justify-content: space-around;
  width: 100%;
  height: auto;
  padding: 1.6rem 0 1.6rem 0;
`;

export const IconContainer = styled(Flex)`
  flex-grow: 1;
  width: 100%;
  height: 3.6rem;

  & a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
