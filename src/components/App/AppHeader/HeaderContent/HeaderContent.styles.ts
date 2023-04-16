import styled from '@emotion/styled';
import { Flex } from '@/components/UI/FlexBox';

export const Root = styled.div`
  width: 100%;

  min-height: 168px;
  background: ${({ theme }) => theme.color.background.default};
`;

export const Wrapper = styled(Flex)`
  align-items: start;
  padding: 42px 22px 0 22px;
  gap: 14px;
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
