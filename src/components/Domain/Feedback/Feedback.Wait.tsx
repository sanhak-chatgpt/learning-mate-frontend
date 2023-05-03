import React, { useEffect, useState } from 'react';
import * as S from './FeedbackForm.styles';
import { SVGIcon } from '@/components/UI/SVGIcon';

const DEFAULT_GEN_TEXT = '피드백 생성 중...';

const FeedBackWait = () => {
  const [genFeedText, setGenFeedText] = useState(DEFAULT_GEN_TEXT);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();

  return (
    <S.WaitContainer flex={'columnCenter'}>
      <S.RecordIconContainer flex={'columnCenter'}>
        <SVGIcon name={'GradientPenIcon'} width={156} height={114} viewBox={'0 0 156 114'} />
      </S.RecordIconContainer>
      <h2>{genFeedText}</h2>
      <h3>잠시만 기다려주세요!</h3>
    </S.WaitContainer>
  );
};

export default FeedBackWait;
