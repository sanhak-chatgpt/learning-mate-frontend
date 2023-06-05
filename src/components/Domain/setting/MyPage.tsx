import { Flex } from '@/components/UI/FlexBox';
import KeywordBox from '@/components/UI/KeywordBox/KeywordBox';
import ListItem from '@/components/UI/ListItem/ListItem';
import { useNavigation } from '@/util/hooks/useNavigation';
import React, { useEffect, useState } from 'react';
import { MemoizedDivider } from '../Home';
import { useSettingHeader } from './MyPage.hooks';
import Link from 'next/link';
import { Toggle } from '@/components/UI/Toggle/Toggle';
import * as S from './MyPage.styles';
import { useRecoilState } from 'recoil';
import { themeKeyState, themeState } from '@/states/state.theme';

export const DarkmodeToggle = () => {
  const [theme, setTheme] = useRecoilState(themeKeyState);
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const handleToggleDarkmode = () => {
    if (theme.theme === 'default') {
      setTheme({ theme: 'dark' });
    } else {
      setTheme({ theme: 'default' });
    }
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    if (theme.theme === 'default') {
      setIsToggled(false);
    } else {
      setIsToggled(true);
    }
  }, []);

  return <Toggle isToggled={isToggled} toggleCallback={handleToggleDarkmode} />;
};

const MyPageController = () => {
  useSettingHeader();
  const { navigateTo } = useNavigation();
  return (
    <Flex flex={'columnStart'}>
      <MemoizedDivider />
      <KeywordBox title={'UI'}>
        <S.RowContainer flex={'rowCenter'} custom={{ justify: 'space-between' }}>
          <ListItem title={'다크모드'} itemSize={{ height: '4.6rem' }} />
          <DarkmodeToggle />
        </S.RowContainer>
        {/* <ListItem title={'언어 변경'} itemSize={{ height: '4.6rem' }} /> */}
      </KeywordBox>
      <MemoizedDivider />
      <KeywordBox title={'규정'}>
        <Link href="https://youngminz.netlify.app/pages/study-mate-privacy-policy">
          <ListItem title={'개인 정보 처리 방침'} itemSize={{ height: '4.6rem' }} />
        </Link>
      </KeywordBox>
      {/* <MemoizedDivider />
      <KeywordBox title={'프로필'}>
        <ListItem
          title={'프로필 수정'}
          itemSize={{ height: '4.6rem' }}
          onClick={() => {
            navigateTo({ path: '/setting/edit-profile' });
          }}
        />
      </KeywordBox> */}
    </Flex>
  );
};

export default MyPageController;
