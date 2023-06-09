import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '@/states/state.user';

export const RankingHeader = () => {
  return (
    <>
      <h1>랭킹</h1>
    </>
  );
};

export const RankingDescription = () => {
  const user = useRecoilValue(userState);

  return (
    <>
      <h2>
        {user.name}님 스터디 메이트에서 학습하신 기록으로
        <br />
        {user.name}님의 학습점수를 확인하실 수 있어요!
      </h2>
    </>
  );
};
