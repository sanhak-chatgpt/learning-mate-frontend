import styled from '@emotion/styled';
import { Flex } from '@/components/UI/FlexBox';

export const ListItemRoot = styled.li`
  width: 100%;
  min-height: 8.6rem;
`;

export const ListItemWrapper = styled(Flex)`
  height: 100%;
  border-bottom: 1px solid #f1f3f8;
  background: ${({ theme }) => theme.color.background.default};
  padding: 2.2rem;

  h3 {
    font-weight: 600;
    font-size: ${({ theme }) => theme.size.font.md};
    line-height: 18px;

    color: ${({ theme }) => theme.color.text.g2};
  }

  h4 {
    font-weight: 400;
    font-size: ${({ theme }) => theme.size.font.xs};
    line-height: 16px;

    color: ${({ theme }) => theme.color.text.g3};
  }
`;

export const IconContainer = styled(Flex)`
  width: 5rem;
  height: 5rem;
`;

export const TextContainer = styled(Flex)`
  gap: 0.6rem;
`;
