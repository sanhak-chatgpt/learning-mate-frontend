import styled from '@emotion/styled';
import { Flex } from '@/components/UI/FlexBox';

export const Root = styled.div`
  width: 100%;

  min-height: 16.8rem;
  background: ${({ theme }) => theme.color.background.default};
`;

export const Wrapper = styled(Flex)`
  align-items: start;
  padding: 4.2rem 2.2rem 0 2.2rem;
  gap: 1.4rem;
  & h1 {
    width: 100%;
    font-size: ${({ theme }) => theme.size.font.xxl};
    color: ${({ theme }) => theme.color.text.g0};
    line-height: 140%;
    font-weight: 700;
  }

  & h2 {
    width: 100%;
    font-size: ${({ theme }) => theme.size.font.sm};
    color: ${({ theme }) => theme.color.text.g3};
    line-height: 140%;
    font-weight: 400;
  }
`;
