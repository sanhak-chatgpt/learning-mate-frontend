import KeywordBox from '@/components/UI/KeywordBox/KeywordBox';
import React, { useEffect, useRef } from 'react';
import { MemoizedDivider } from '../../Home';
import { useEditProfile } from './EditProfile.hooks';
import * as S from '../MyPage.styles';

const EditProfile = () => {
  const { nameInputRef, handleNameSubmit } = useEditProfile();

  return (
    <>
      <MemoizedDivider />
      <KeywordBox title={'닉네임 변경'}>
        <S.FormWrapper flex={'rowCenter'} as={'form'} action="submit" onSubmit={handleNameSubmit}>
          <S.Input type="text" ref={nameInputRef} />
          <button type={'submit'}>변경</button>
        </S.FormWrapper>
      </KeywordBox>
    </>
  );
};

export default EditProfile;
