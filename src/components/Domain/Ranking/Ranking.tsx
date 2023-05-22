import React, { useCallback, useEffect } from "react";
import * as S from './Ranking.styles'
import { SVGIcon } from "@/components/UI/SVGIcon";
import { useGetRankingQuery, useSettingHeader } from "./Ranking.hooks";

export const Ranking = () => {
    useSettingHeader();
    const message = useGetRankingQuery();

    const RankingResultRended = () => {
        return message.status === 'loading' ? (
            <div>loading ranking</div>
        ) : message.status === 'error' ? (
            <div>getting ranking has an error</div>
        ) : (
            <div>{message.data?.message}</div>
        )
    }
      
    return(
        <S.Root>
            <SVGIcon name={'RankingPageIcon'} width={250} height={250} viewBox={'0 0 210 210'}></SVGIcon>
            <RankingResultRended />
        </S.Root>
    )
};