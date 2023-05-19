import Head from 'next/head';
import { useModalContext } from '@/components/UI/Modal/Modal.hooks';
import { useNavigation } from '@/util/hooks/useNavigation';
import React, { useCallback, useEffect } from 'react';
import ListItem from '@/components/UI/ListItem/ListItem';
import {
  MainHeader,
  MainHeaderDescription,
} from '@/components/App/AppHeader/HeaderContent/HeaderContentImpls/MainHeader';
import { useRecoilState } from 'recoil';
import { headerContentState } from '@/states/state.header';
import { MemoizedDivider, MemoizedPlaceHolder, Root, Wrapper } from '@/components/Domain/Home';
import { JWT_TOKEN_KEY, localStorageManager, USER_NAME_KEY } from '@/util/models/Storage';
import { UserControllerApi } from '@/util/Api';

export default function Home() {
  const { openModal } = useModalContext();
  const { navigateTo } = useNavigation();
  const [headerContent, setHeaderContent] = useRecoilState(headerContentState);

  useEffect(() => {
    if (!localStorageManager.getItem(JWT_TOKEN_KEY)) {
      const api = new UserControllerApi();
      const token = api.issueToken().then((res) => {
        localStorageManager.setItem(JWT_TOKEN_KEY, res.authToken);
        localStorageManager.setItem(USER_NAME_KEY, res.name);
      });
    }
  }, []);

  const handleOpenModal = React.useCallback(() => {
    openModal({
      type: 'PreparingService',
      props: {},
      events: {
        onClose: () => {
          navigateTo({ path: '/' });
        },
      },
    });
  }, []);

  const handleForwardFeedbackPage = React.useCallback(() => {
    navigateTo({
      path: '/feedback',
      query: {
        process: 'major',
      },
    });
  }, []);

  const initializeHeaderContent = useCallback(() => {
    setHeaderContent({
      title: MainHeader,
      description: MainHeaderDescription,
      backward: {
        visible: false,
        historyStack: [],
      },
    });
  }, []);

  useEffect(() => {
    initializeHeaderContent();
  }, []);

  return (
    <>
      <Head>
        <title>Learning Mate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" type={'image/svg+xml'} href="public/icons/gradient_pen_icon.svg" />
      </Head>
      <Root>
        <Wrapper flex={'columnStart'}>
          <MemoizedPlaceHolder></MemoizedPlaceHolder>
          <ListItem
            title={'AI에게 가르치고 피드백 받기'}
            description={'가르친 내용의 90%를 기억할 수 있어요'}
            icon={{ name: 'MessageIcon', width: '5rem', height: '5rem' }}
            onClick={handleForwardFeedbackPage}
          />
          <MemoizedDivider></MemoizedDivider>
          <ListItem
            title={'다른 고수의 강의 보러가기'}
            description={'고수가 알기 쉽게 설명한 강의를 들어볼까요?'}
            icon={{ name: 'ExplorerIcon', width: '5rem', height: '5rem' }}
            onClick={handleOpenModal}
          />
        </Wrapper>
      </Root>
    </>
  );
}
