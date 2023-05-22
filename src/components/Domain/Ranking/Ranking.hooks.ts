import React from "react";
import { useNavigation } from "@/util/hooks/useNavigation";
import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import { headerContentState } from '@/states/state.header';
import { RankingHeader, RankingDescription } from '@/components/App/AppHeader/HeaderContent/HeaderContentImpls/RankingHeader';
import { useQuery } from "@tanstack/react-query";
import { RankingControllerApi } from "@/util/Api";

export const RANKING_QUERY_KEY = 'ranking';

export const useGetRankingQuery = () => {
    const { data, status } = useQuery({
        queryKey:[RANKING_QUERY_KEY],
        queryFn: async () => {
            const api = new RankingControllerApi();
            return await api.getRanking();
        },
        enabled:true,
    });
    return {data, status};
};

export const useSettingHeader = () => {
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
};