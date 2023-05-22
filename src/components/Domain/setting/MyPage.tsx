import { Flex } from '@/components/UI/FlexBox';
import KeywordBox from '@/components/UI/KeywordBox/KeywordBox';
import ListItem from '@/components/UI/ListItem/ListItem';
import { useNavigation } from '@/util/hooks/useNavigation';
import React from 'react';
import { MemoizedDivider } from '../Home';
import { useSettingHeader } from './MyPage.hooks';
import * as S from './MyPage.styles';

const MyPageController = () => {
  useSettingHeader();
  const { navigateTo } = useNavigation();
  return (
    <Flex flex={'columnStart'}>
      <MemoizedDivider />
      <KeywordBox title={'UI'}>
        <ListItem title={'다크모드'} itemSize={{ height: '4.6rem' }} />
        <ListItem title={'언어 변경'} itemSize={{ height: '4.6rem' }} />
      </KeywordBox>
      <MemoizedDivider />
      <KeywordBox title={'규정'}>
        <ListItem title={'이용약관'} itemSize={{ height: '4.6rem' }} />
      </KeywordBox>
      <MemoizedDivider />
      <KeywordBox title={'프로필'}>
        <ListItem
          title={'프로필 수정'}
          itemSize={{ height: '4.6rem' }}
          onClick={() => {
            navigateTo({ path: '/setting/edit-profile' });
          }}
        />
      </KeywordBox>
      {/*<MemoizedDivider />*/}
    </Flex>
  );
};

export default MyPageController;
