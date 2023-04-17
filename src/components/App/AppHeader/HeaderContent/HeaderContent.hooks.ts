import React, { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { headerContentState } from '@/states/state.header';
import { useRouter } from 'next/router';
import {
  MainHeaderDescription,
  MainHeader,
} from '@/components/App/AppHeader/HeaderContent/MainHeaderImpl/MainHeader';

export const useHeader = () => {
  const [headerContent, setHeaderContent] = useRecoilState(headerContentState);
  const { pathname } = useRouter();

  const isRootPage = useCallback(() => {
    return pathname === '/';
  }, [pathname]);

  useEffect(() => {
    if (isRootPage()) {
      setHeaderContent({
        title: MainHeader,
        description: MainHeaderDescription,
        state: 'main',
      });
    }
  }, [pathname]);
  return {
    headerContent,
    setHeaderContent,
  };
};
