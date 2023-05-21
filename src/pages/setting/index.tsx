import React, { useCallback, useEffect } from 'react';
import { useModalContext } from '@/components/UI/Modal/Modal.hooks';
import { useNavigation } from '@/util/hooks/useNavigation';
import MyPageController from '@/components/Domain/setting/MyPage';

const SettingPage = () => {

  return (
    <MyPageController/>
  );
};



export default SettingPage;
