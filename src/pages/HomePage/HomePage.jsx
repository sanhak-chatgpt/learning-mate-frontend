import React from 'react';
import styled from '@emotion/styled';
import { AppFooter } from '@/component/App/AppFooter'
import { ListItem } from '@/component/App/UI/ListItem'
import { HeaderContent } from '@/component/App/AppHeader/HeaderContent'
import * as S from './HomePage.style';

function HomePage() {
    function Memo(){
        return <p>바로 시작해볼까요?</p>
    }

    function Box(){
        return <div class='Box'></div>
    }

//ListItem 안에 props를 넣어야 하나요?
    return(
        <S.Root>
            <S.Wrapper>
                <HeaderContent></HeaderContent>
                <Memo></Memo>
                <S.ContentWrapper>
                    <ListItem></ListItem>
                    <Box></Box>
                    <ListItem></ListItem>
                </S.ContentWrapper>
                <AppFooter></AppFooter>
            </S.Wrapper>
        </S.Root>     
    );
}