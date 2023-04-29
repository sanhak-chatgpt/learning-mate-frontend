import styled from '@emotion/styled';

export const Root = styled.footer`
  width: 100%;
  height: 9rem;
  position: absolute;
  bottom: 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  box-shadow: ${({ theme }) => theme.shadow.default};
  border-radius: 2rem 2rem 0 0;
`;
