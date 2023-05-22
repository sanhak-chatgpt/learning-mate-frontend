import React, { useCallback, useEffect } from "react";
import * as S from './Ranking.styles'
import { SVGIcon } from "@/components/UI/SVGIcon";
import { useGetRankingQuery, useSettingHeader } from "./Ranking.hooks";

export const Ranking = () => {
    useSettingHeader();
    const message = useGetRankingQuery();

    const RankingResultRended = () => {
        return message.status === 'loading' ? (
            <h4>loading ranking</h4>
        ) : message.status === 'error' ? (
            <h4>getting ranking has an error</h4>
        ) : (
            <h4>{message.data?.message}</h4>
        )
    }
      
    return(
        <S.Root flex={"columnCenter"}>
            <S.IconWrapper>
                <SVGIcon name={'RankingPageIcon'} width={250} height={250} viewBox={'0 0 210 210'}></SVGIcon>
            </S.IconWrapper>
            <RankingResultRended />
        </S.Root>
    )
};

