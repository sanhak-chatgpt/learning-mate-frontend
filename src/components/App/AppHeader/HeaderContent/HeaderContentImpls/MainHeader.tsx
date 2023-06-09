import React from 'react';
import { useGetUserNameQuery } from '@/components/Domain/Home/Home.hooks';

export const MainHeader = () => {
  const { data, status } = useGetUserNameQuery();

  return (
    <>
      {(status === 'error' || status === 'loading') && (
        <h1>
          스터디 메이트에
          <br />
          오신 것을 환영해요.
        </h1>
      )}
      {status === 'success' && (
        <h1>
          {data?.name} 님, 스터디 메이트에
          <br />
          오신 것을 환영해요.
        </h1>
      )}
    </>
  );
};

export const MainHeaderDescription = () => {
  return (
    <>
      <h2>
        스터디 메이트에서 학습 피라미드 이론에 근거하여
        <br />
        AI에게 내 지식을 가르치고 피드백을 바로 받아볼 수 있어요.
      </h2>
    </>
  );
};
