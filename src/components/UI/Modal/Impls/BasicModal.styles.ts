import styled from '@emotion/styled';
import { Flex } from '@/components/UI/FlexBox';

export const Root = styled.div`
  width: 28.1rem;
  height: 20.9rem;
`;

export const Container = styled(Flex)<{ visible: boolean }>`
  background: ${({ theme }) => theme.color.background.default};
  border-radius: 20px;
  padding: 1.8rem;

  transform: ${({ visible }) => (visible ? 'translateY(0)' : 'translateY(70rem)')};
  transition: transform 400ms;
`;

export const Wrapper = styled(Flex)`
  width: 100%;
  & header {
    font-weight: 700;
    font-size: 20px;
    line-height: 140%;
    margin-top: 2.6rem;
    text-align: center;
    width: 100%;
  }

  & main {
    margin-top: 4rem;
    width: 100%;
  }

  & footer {
    margin-top: 4rem;
    width: 100%;
  }
`;

export const ModalButton = styled(Flex)`
  background: ${({ theme }) => theme.color.background.darker};
  width: 100%;
  height: 5.1rem;
  text-align: center;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 140%;
  color: ${({ theme }) => theme.color.text.g2};
  border-radius: 13px;
  border: none;

  &:hover {
    background: ${({ theme }) => theme.color.nav.active};
  }
`;
