import styled from '@emotion/styled';
import { Flex } from '../FlexBox';

export const Container = styled(Flex)`
  box-sizing: border-box;
  width: 100%;
  & span {
    width: 100%;
    display: block;
    font-size: ${({ theme }) => theme.size.font.lg};
    line-height: 140%;
    color: ${({ theme }) => theme.color.text.g3};
    font-weight: 700;
  }

  & a {
    width: 100%;
  }
`;

export const TitleWrapper = styled(Flex)`
  width: 100%;
  padding: 1.2rem 2.2rem 1.2rem 2.2rem;
  box-sizing: border-box;
`;
export const ContentWrapper = styled(Flex)`
  width: 100%;
  padding: 0 2.2rem 1.2rem 2.2rem;
  box-sizing: border-box;
`;
