import React from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '@/states/state.user';

export const ErrorHeaderTitle = () => {
  const [user, setUser] = useRecoilState(userState);

  return (
    <>
      <h1>404 Error - Page Not Found</h1>
    </>
  );
};

export const ErrorHeaderDescription = () => {
  const [user, setUser] = useRecoilState(userState);

  return (
    <>
      <h2>{user.name} 님 원래 있던 곳으로 돌아가세요!</h2>
    </>
  );
};
