import styled from '@emotion/styled';
import { Flex } from '@/components/UI/FlexBox';

export const Root = styled(Flex)`
  width: 100%;
  height: auto;
`;

export const IconWrapper = styled.div`
  width: auto;
  height: auto;
  padding-bottom: 3rem;
  padding-top: 5rem;
`;

export const RankingMessageWrapper = styled(Flex)`
  width: 100%;
  box-sizing: border-box;
  padding: 0 2.2rem 0 2.2rem;
  text-align: center;

  & h4 {
    font-size: ${({ theme }) => theme.size.font.sm};
    color: ${({ theme }) => theme.color.text.g3};
    font-weight: 500;
    line-height: 140%;
  }
`;
