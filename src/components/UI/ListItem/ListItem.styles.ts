import styled from '@emotion/styled';
import { Flex } from '@/components/UI/FlexBox';

export const ListItemRoot = styled.li<{ itemSize?: { width?: string; height?: string } }>`
  width: 100%;
  height: 8.6rem;
  padding: 0 2.2rem 0 2.2rem;
  box-sizing: border-box;
  list-style: none;
  ${({ itemSize }) => {
    const totalWidth = itemSize?.width ? itemSize?.width : '100%';
    const totalHeight = itemSize?.height ? itemSize?.height : '8.6rem';
    return `
      width: ${totalWidth};
      height: ${totalHeight};
    `;
  }}
`;

export const ListItemWrapper = styled(Flex)`
  height: 100%;
  width: 100%;
  border-bottom: 1px solid #f1f3f8;
  background: ${({ theme }) => theme.color.background.default};

  h3 {
    font-weight: 600;
    width: 100%;
    font-size: ${({ theme }) => theme.size.font.md};
    line-height: 18px;
    text-align: start;
    color: ${({ theme }) => theme.color.text.g2};
  }

  h4 {
    font-weight: 400;
    width: 100%;
    font-size: ${({ theme }) => theme.size.font.xs};
    line-height: 16px;
    text-align: start;
    color: ${({ theme }) => theme.color.text.g3};
  }
`;

export const IconContainer = styled(Flex)`
  height: 100%;
  margin-right: 1.8rem;
`;

export const TextContainer = styled(Flex)`
  gap: 0.6rem;
  width: 100%;
  height: 100%;
`;
