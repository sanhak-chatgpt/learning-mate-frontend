import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  cursor: pointer;
`;

export const ToggleWrapper = styled.div<{ isToggled: boolean }>`
  width: 5rem;
  height: 2.4rem;
  border-radius: 3rem;
  background-color: rgb(233, 233, 234);
  transition: 0.3s;
  ${({ theme, isToggled }) => {
    if (isToggled) {
      return `
            background-color: ${theme.color.success.main};
            transition: 0.3s;
            left: 27px;
      
        `;
    }
  }}
`;

export const ToggleCircle = styled.div<{ isToggled: boolean }>`
  position: absolute;
  top: 0.1rem;
  left: 0.2rem;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  background-color: rgb(255, 254, 255);
  transition: 0.3s;

  ${({ theme, isToggled }) => {
    if (isToggled) {
      return `
            transition: 0.3s;
            left: 2.7rem;
      
        `;
    }
  }}
`;
