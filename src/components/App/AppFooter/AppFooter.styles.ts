import styled from '@emotion/styled';

export const Root = styled.footer`
  width: 100%;
  height: 90px;
  position: absolute;
  bottom: 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  box-shadow: ${({ theme }) => theme.shadow.default};
  border-radius: 20px 20px 0px 0px;
`;
