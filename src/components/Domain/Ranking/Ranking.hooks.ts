import { useNavigation } from "@/util/hooks/useNavigation";
import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import { headerContentState } from '@/states/state.header';
import {
    RankingHeader,
    RankingDescription,
  } from '@/components/App/AppHeader/HeaderContent/HeaderContentImpls/RankingHeader';


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


}