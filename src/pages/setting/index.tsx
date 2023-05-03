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

  useEffect(() => {
    if (getCurrentPath() === '/setting') handleOpenModal();
    return () => {};
  }, []);

  return <div>마이페이지</div>;
};

export default SettingPage;
