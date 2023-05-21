import React, { useCallback, useEffect } from "react";
import * as S from './Ranking.styles'
import { SVGIcon } from "@/components/UI/SVGIcon";
import {
    RankingHeader,
    RankingDescription,
  } from '@/components/App/AppHeader/HeaderContent/HeaderContentImpls/RankingHeader';
import { useRecoilState } from 'recoil';
import { headerContentState } from '@/states/state.header';

export const Ranking = () => {
    const [headerContent, setHeaderContent] = useRecoilState(headerContentState);
    
    const initializeHeaderContent = useCallback(() => {
        setHeaderContent({
            title: RankingHeader,
            description: RankingDescription,
            backward: {
                visible: false,
                historyStack: [],
            },
        });
    }, []);

    useEffect(() => {
        initializeHeaderContent();
    }, []);

      
    return(
        <SVGIcon name={'RankingPageIcon'} width={250} height={250} viewBox={'0 0 210 210'}></SVGIcon>
    )
};