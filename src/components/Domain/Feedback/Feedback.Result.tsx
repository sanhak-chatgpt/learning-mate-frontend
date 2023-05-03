import React from 'react';
import * as S from './FeedbackForm.styles';
import { SVGIcon } from '@/components/UI/SVGIcon';
import { useFeedbackRecordContoller } from '@/components/Domain/Feedback/FeedbackRecord.hooks';
import FeedbackWait from '@/components/Domain/Feedback/Feedback.Wait';
import ListItem from '@/components/UI/ListItem/ListItem';
import {
    LectureDtoResponse
  } from '@/util';

  
export type ResultListTitle = string;
export type ResultListDescription = string;

export type ResultProps = {
    result: LectureDtoResponse | undefined;
};

const FeedbackResult = ({result}: ResultProps) => {
    return (
        <S.Root>
            <S.Wrapper flex={'columnStart'}>
                <S.ResultContainer flex={'columnStart'}>
                    <ListItem title='나의 강의' description={'나도 몰라'}></ListItem>
                    <ListItem title='점수' description={result?.score + '/100'} ></ListItem>
                    <ListItem title='좋았던 점' description={result?.strength}></ListItem>
                    <ListItem title='개선하면 좋은 점' description={result?.weakness}></ListItem>
                </S.ResultContainer>
            </S.Wrapper>
        </S.Root>
    );
};

export default FeedbackResult;