import React, { useCallback, useEffect } from 'react';
import { useModalContext } from '@/components/UI/Modal/Modal.hooks';
import { useNavigation } from '@/util/hooks/useNavigation';

const SettingPage = () => {
  const { openModal } = useModalContext();
  const { getCurrentPath, navigateTo } = useNavigation();
  const handleOpenModal = () => {
    openModal({
      type: 'PreparingService',
      props: {},
      events: {
        onClose: () => {
          navigateTo('/');
        },
      },
    });
  };
  console.log('렌더링 세팅 페이지');

  useEffect(() => {
    console.log('이펙트 실행');
    if (getCurrentPath() === '/setting') handleOpenModal();
    return () => {
      console.log('페이지 언마운트 세팅');
    };
  }, []);

  return <div></div>;
};

export default SettingPage;
