import { Flex } from '@/components/UI/FlexBox';
import styled from '@emotion/styled';

export const FormWrapper = styled(Flex)`
  width: 100%;
  height: 100%;

  & button {
    border-radius: 1rem;
    height: 4.3rem;
    min-width: 6.8rem;
    text-align: center;
    font-weight: 400;
    color: ${({ theme }) => theme.color.text.g3};
    font-size: ${({ theme }) => theme.size.font.lg};
    border: none;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 5px 2px;

    &:hover {
      background: ${({ theme }) => theme.color.nav.active};
      color: ${({ theme }) => theme.color.background.default};
      transition-duration: 200ms;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  min-height: 4.2rem;
  border-radius: 1rem;
  border: 0.05rem solid ${({ theme }) => theme.color.background.darker};
  background-color: ${({ theme }) => theme.color.background.darker};
  margin-right: 1.2rem;
  box-sizing: border-box;
  padding: 1.2rem;
  outline: none !important;

  font-weight: 700;
  color: ${({ theme }) => theme.color.text.g3};
  font-size: ${({ theme }) => theme.size.font.lg};
  &:focus {
    border: 0.2rem solid ${({ theme }) => theme.color.nav.active};
    //transition-duration: 300ms;
  }
`;

export const RowContainer = styled(Flex)`
  width: 100%;
`;
