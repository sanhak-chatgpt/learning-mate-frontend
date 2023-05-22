import React from "react";
import * as S from './KeywordBox.styles'

export type KeyworBoxProps = React.PropsWithChildren<{
  title?:string
}>

const KeywordBox = ({title, children}:KeyworBoxProps) => {


  return (
    <S.Container flex={'columnCenter'}>
      <S.TitleWrapper flex={'rowStart'}>
        <span>
          {title ?? ""}
        </span>
      </S.TitleWrapper>
        <S.ContentWrapper flex={'columnStart'} as={'ul'}>
          {children}
        </S.ContentWrapper>
    </S.Container>
  );
};

export default KeywordBox;
