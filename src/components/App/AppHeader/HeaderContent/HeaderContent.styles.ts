import styled from '@emotion/styled';
import { Flex } from '@/components/UI/FlexBox';

export const Root = styled.div`
  min-height: 16.8rem;
  background: ${({ theme }) => theme.color.background.default};
`;

export const Container = styled.div`
  padding: 4.2rem 2.2rem 0 2.2rem;
`;

export const Wrapper = styled(Flex)`
  align-items: start;
  width: 100%;
  max-width: 100%;
  gap: 1.4rem;
  & h1 {
    font-size: ${({ theme }) => theme.size.font.xxl};
    color: ${({ theme }) => theme.color.text.g0};
    line-height: 140%;
    font-weight: 700;
  }

  & h2 {
    font-size: ${({ theme }) => theme.size.font.sm};
    color: ${({ theme }) => theme.color.text.g3};
    line-height: 140%;
    font-weight: 400;
  }
`;
