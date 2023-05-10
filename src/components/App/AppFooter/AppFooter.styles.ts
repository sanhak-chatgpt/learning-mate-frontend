import styled from '@emotion/styled';

export const Root = styled.footer<{ isVisible: boolean }>`
  width: 100%;
  position: fixed;
  bottom: 0;

  ${({ isVisible }) => {
    return `
      display: ${isVisible ? 'block' : 'none'};
    `;
  }}
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: ${({ theme }) => theme.shadow.default};
  background-color: ${({ theme }) => theme.color.background.default};
  border-radius: 2rem 2rem 0 0;

  padding: 0 0 calc(constant(safe-area-inset-bottom)+ 2.2rem);
  padding: 0 0 calc(env(safe-area-inset-bottom) + 2.2rem);
`;
