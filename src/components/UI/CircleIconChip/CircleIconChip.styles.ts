import styled from '@emotion/styled';
import { Flex } from '@/components/UI/FlexBox';

export const Root = styled.div`
  width: 3.6rem;
  height: 3.6rem;
`;

export const Wrapper = styled(Flex)<{index : number, list: boolean[]}>`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  gap: 0.8rem;
  background-color: ${({ theme, index, list }) => (list[index] ? theme.color.nav.active : '#F6F7FB')};
`;
