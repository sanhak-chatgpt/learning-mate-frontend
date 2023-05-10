import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '@/states/state.user';

export const ErrorHeaderTitle = () => {
  return (
    <>
      <h1>404 Error - Page Not Found</h1>
    </>
  );
};

export const ErrorHeaderDescription = () => {
  const user = useRecoilValue(userState);

  return (
    <>
      <h2>{user.name} 님 원래 있던 곳으로 돌아가세요!</h2>
    </>
  );
};
