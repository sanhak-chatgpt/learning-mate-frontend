import React, { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { headerContentState } from '@/states/state.header';

export const useHeader = () => {
  const { pathname } = useRouter();
  const [headerContent, setHeaderContent] = useRecoilState(headerContentState);

  return {
    headerContent,
    setHeaderContent,
  };
};
