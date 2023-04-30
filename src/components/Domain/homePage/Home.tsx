import React from 'react';
import styled from '@emotion/styled';
import { Flex } from '@/components/UI/FlexBox';

const PlaceHolderContainer = styled(Flex)`
  padding: 0 2.2rem 0 2.2rem;
  width: 100%;
  box-sizing: border-box;
  & p {
    margin-top: 4rem;
    width: 100%;
    font-weight: 700;
    font-size: ${({ theme }) => theme.size.font.sm};
    line-height: 140%;
    color: ${({ theme }) => theme.color.text.g3};
  }
`;
const PlaceHolder = () => (
  <PlaceHolderContainer flex={'rowStart'}>
    <p>바로 시작해볼까요?</p>
  </PlaceHolderContainer>
);
export const MemoizedPlaceHolder = React.memo(PlaceHolder);

const Divider = styled.div`
  width: 100%;
  height: 8px;
  background: ${({ theme }) => theme.color.text.g4};
`;
export const MemoizedDivider = React.memo(Divider);

export const Root = styled.div`
  width: 100%;
  height: auto;
`;

export const Wrapper = styled(Flex)`
  width: 100%;
`;
