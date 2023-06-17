import React from 'react';
/* import { useRecoilValue } from 'recoil';
import { userState } from '@/states/state.user'; */
import { useGetUserNameQuery } from '@/components/Domain/Home/Home.hooks';

export const RankingHeader = () => {
  return (
    <>
      <h1>랭킹</h1>
    </>
  );
};

export const RankingDescription = () => {
  const { data, status } = useGetUserNameQuery();
  /* const user = useRecoilValue(userState); */

  return (
    <>
      {(status === 'error' || status === 'loading') && (
        <h2>
          스터디 메이트에서 학습하신 기록으로
          <br />
          학습점수를 확인하실 수 있어요!
        </h2>
      )}
      {(status === 'success' && (
        <h2>
        {data?.name}님 스터디 메이트에서 학습하신 기록으로
        <br />
        {data?.name}님의 학습점수를 확인하실 수 있어요!
      </h2>
      ))} 
    </>
  );
};
