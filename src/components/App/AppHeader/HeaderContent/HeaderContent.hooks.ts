import React, { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { headerContentState } from '@/states/state.header';
import { useRouter } from 'next/router';
import {
  MainHeaderDescription,
  MainHeader,
} from '@/components/App/AppHeader/HeaderContent/MainHeaderImpl/MainHeader';
import {
  ErrorHeader,
  ErrorHeaderDescription,
} from '@/components/App/AppHeader/HeaderContent/MainHeaderImpl/404Header';

export const useHeader = () => {
  const [headerContent, setHeaderContent] = useRecoilState(headerContentState);
  const { pathname } = useRouter();

  const isRootPage = useCallback(() => {
    return pathname === '/';
  }, [pathname]);

  const is404Page = useCallback(() => {
    return pathname === '/404';
  }, [pathname]);

  useEffect(() => {
    if (isRootPage()) {
      setHeaderContent({
        title: MainHeader,
        description: MainHeaderDescription,
        state: 'main',
      });
    }
    else if (is404Page()) {
      setHeaderContent({
        title: ErrorHeader,
        description: ErrorHeaderDescription,
        state: '404',
      });
    }
  }, [pathname]);
  return {
    headerContent,
    setHeaderContent,
  };
};
