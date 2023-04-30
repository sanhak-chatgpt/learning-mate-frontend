import React from 'react';
import styled from '@emotion/styled';
import { ListItem } from '@/component/App/UI/ListItem'
import * as S from './HomePage.style';

function HomePage() {
    function Memo(){
        return <p>바로 시작해볼까요?</p>
    }

    function Box(){
        return <div class='Box'></div>
    }

//이렇게 쓰긴 했는데, ListItem에 내가 원하는걸 넣는 법을 모르겠다 이말이다
    return(
        <S.Root>
            <S.Wrapper as='div' flex='columnStart'>
                <Memo></Memo>
                <ListItem></ListItem>
                <Box></Box>
                <ListItem></ListItem>
            </S.Wrapper>
        </S.Root>     
    );
}