import React, { HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import * as S from './Feedback.styles';

import ListItem from '@/components/UI/ListItem/ListItem';
import { LectureDtoResponse } from '@/util/Api';

export type ResultProps = {
  result: LectureDtoResponse | undefined;
} & HTMLAttributes<HTMLDivElement>;

const Divider = styled.div`
  width: 100%;
  height: 16px;
  background: ${({ theme }) => theme.color.background.default};
`;

const FeedbackResult = ({ result }: ResultProps) => {
  return (
    <S.ResultContainer flex={'columnStart'}>
      <ListItem title="나의 강의" description={result?.transcribed as string} />
      <Divider />
      <ListItem title="점수" description={result?.score + '/100'} />
      <Divider />
      <ListItem title="좋았던 점" description={result?.strength} />
      <Divider />
      <ListItem title="개선하면 좋은 점" description={result?.weakness} />
    </S.ResultContainer>
  );
};

export default FeedbackResult;
