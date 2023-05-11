import styled from '@emotion/styled';
import { Flex } from '../components/UI/FlexBox';
import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { headerContentState } from '../states/state.header';
import {
  ErrorHeaderTitle,
  ErrorHeaderDescription,
} from '../components/App/AppHeader/HeaderContent/HeaderContentImpls';

export const Wrapper = styled(Flex)`
  width: 100%;
  min-height: 100%;
`;

const Custom404 = () => {
  const setHeaderContent = useSetRecoilState(headerContentState);

  useEffect(() => {
    setHeaderContent({
      title: ErrorHeaderTitle,
      description: ErrorHeaderDescription,
      state: '404',
      backward: {
        visible: false,
        historyStack: [],
      },
    });
  }, []);

  return <div></div>;
};

export default Custom404;
