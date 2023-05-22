import React, { useCallback, useEffect } from "react";
import * as S from './Ranking.styles'
import { SVGIcon } from "@/components/UI/SVGIcon";
import { useSettingHeader } from "./Ranking.hooks";

export const Ranking = () => {
    useSettingHeader();
      
    return(
        <SVGIcon name={'RankingPageIcon'} width={250} height={250} viewBox={'0 0 210 210'}></SVGIcon>
    )
};