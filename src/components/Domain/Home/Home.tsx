import React from 'react';
import { Divider, StartTextContainer } from './Home.styles';

export const StartText = () => (
  <StartTextContainer flex={'rowStart'}>
    <p>바로 시작해볼까요?</p>
  </StartTextContainer>
);
export const MemoizedPlaceHolder = React.memo(StartText);
export const MemoizedDivider = React.memo(Divider);
