import { useHeader } from "@/components/App/AppHeader/HeaderContent";
import KeywordBox from "@/components/UI/KeywordBox/KeywordBox";
import { useNavigation } from "@/util/hooks/useNavigation";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useRef } from "react";
import * as S from '../MyPage.styles'
import { useEditProfile } from "./EditProfile.hooks";

const EditProfile = () => {
const {nameInputRef, handleNameSubmit} =useEditProfile()


  return (
    <KeywordBox title={'닉네임 변경'}>
      <form action="submit">
        <input type="text" ref={nameInputRef}  />
        <button onClick={handleNameSubmit}>변경하기</button>
      </form>
    </KeywordBox>
  );
};

export default EditProfile;
