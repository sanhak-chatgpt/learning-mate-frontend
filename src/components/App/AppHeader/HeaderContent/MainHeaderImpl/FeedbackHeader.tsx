import React, { useState } from 'react';

export const SubjectHeader = (majorName: string) => {
  return (
    <>
      <h1>
        {majorName} 학과의
        <br />
        과목을 선택해주세요.
      </h1>
    </>
  );
};

export const TopicHeader = (subjectName: string) => {
  return (
    <>
      <h1>
        {subjectName} 과목에 대한
        <br />
        학습 과제를 선택해주세요.
      </h1>
    </>
  );
};
