import React from "react";
import * as S from './KeywordBox.styles'

export type KeyworBoxProps = React.PropsWithChildren<{
  title?:string
}>

const KeywordBox = ({title, children}:KeyworBoxProps) => {


  return (
    <S.Container flex={'columnCenter'}>
        <span>
          {title ?? ""}
        </span>
        <S.Container flex={'columnStart'} as={'ul'}>
          {children}
        </S.Container>
    </S.Container>
  );
};

export default KeywordBox;
