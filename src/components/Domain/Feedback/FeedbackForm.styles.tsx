import styled from '@emotion/styled';
import { Flex } from '@/components/UI/FlexBox';

export const Root = styled.div`
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled(Flex)`
  height: 100%;
`;

export const ConfigListRoot = styled.div`
  width: 100%;
`;

export const RecordContainer = styled(Flex)`
  width: 100%;
  max-height: 100%;
  gap: 2.2rem;
  box-sizing: border-box;
`;
export const RecordIconContainer = styled(Flex)`
  width: 100%;
  position: relative;

  & .Mic {
    z-index: 3;
    //background: linear-gradient(
    //  94.66deg,
    //  rgba(254, 130, 219, 0.2) -2.1%,
    //  rgba(104, 228, 255, 0.2) 108.41%
    //);
    //box-shadow: inset 0px 0.5px 2px rgba(255, 255, 255, 0.4);
    //backdrop-filter: blur(15px);
    /* Note: backdrop-filter has minimal browser support */
  }
  & .Circle {
    z-index: 2;
    position: absolute;
    left: 50%;
    right: 13.75%;
    top: 55.42%;
    bottom: 8.33%;
  }
`;

export const WaitContainer = styled(Flex)`
  width: 100%;
  max-height: 100%;
  position: absolute;

  gap: 2.2rem;
  box-sizing: border-box;

  & h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 140%;
    color: ${({ theme }) => theme.color.text.g0};
  }

  & h3 {
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: ${({ theme }) => theme.color.text.g3};
  }
`;

export const ResultContainer = styled(Flex)`
  width: 100%;
  max-height: 100%
  position: absolute;
`;

export const ConfigListWrapper = styled(Flex)`
  width: 100%;
  //overflow-y: hidden;
  gap: 0.6rem;

  & h1 {
    font-weight: 700;
    font-size: ${({ theme }) => theme.size.font.xxl};
    color: ${({ theme }) => theme.color.text.g1};
    line-height: 29px;
  }
`;

export const RecordFooter = styled.footer`
  width: 100%;

  //bottom: 2rem;
`;

export const RecordButtonWrapper = styled(Flex)`
  padding: 0 2.2rem 0 2.2rem;
  min-height: 8rem;
  box-sizing: border-box;
  width: 100%;
  //position: fixed;
  //bottom: 0;
  //margin-bottom: 4rem;
`;

export const RecordCompleteButton = styled(Flex)`
  background: #54a6f1;
  border-radius: 13px;
  text-align: center;
  width: 100%;
  height: 5rem;
  border: none;

  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  color: ${({ theme }) => theme.color.background.default};
`;

export const ResultContentContainer = styled(Flex)`
  width: 100%;
  position: relative;

  // 얘가 feedback 내용들 description
  & h3 {
    font-size: ${({ theme }) => theme.size.font.sm};
    font-weight: 600;
    line-height: 19.6px;
    color: ${({ theme }) => theme.color.text.g2}
  }

  // 얘가 title
  & h4 {
    font-weight: 400;
    font-size: ${({ theme }) => theme.size.font.sm};
    line-height: 18.2px;
    color: ${({ theme }) => theme.color.text.g3};
  }
`;