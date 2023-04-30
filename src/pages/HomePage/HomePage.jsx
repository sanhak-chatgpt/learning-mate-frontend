import React, { useEffect } from 'react';
import { useModalContext } from '@/components/UI/Modal/Modal.hooks';
import { ListItem } from 'src/components/UI/ListItem/ListItem'
import { useNavigation } from '@/util/hooks/useNavigation';
import * as S from './HomePage.style';

export const HomePage = () => {
    const { openModal } = useModalContext();
    const { getCurrentPath, navigateTo } = useNavigation();
    const handleOpenModal = () => {
        openModal({
            type: 'PreparingService',
            props: {},
            events: {
                onclose: () => {
                    navigateTo('/');
                },
            },
        });
    };

    const Memo = () => {
        return <p>바로 시작해볼까요?</p>
    };

    const Box = () => {
        return <div class='Box'></div>
    };

    function handleClick() {
        handleOpenModal();
        return console.log('123123');
    };

//이렇게 쓰긴 했는데, ListItem에 내가 원하는걸 넣는 법을 모르겠다 이말이다
    return(
        <S.Root>
            <S.Wrapper as='div' flex={'columnStart'}>
                <Memo></Memo>
                <ListItem title={"AI에게 가르치고 피드백 받기"} description={'가르친 내용의 90%를 기억할 수 있어요'} icon></ListItem>
                <Box></Box>
                <div onClick={handleClick}>
                    <ListItem title={'다른 고수의 강의 보러가기'} description={'고수가 알기 쉽게 설명한 강의를 들어볼까요?'} icon></ListItem>
                </div>
            </S.Wrapper>
        </S.Root>     
    );
};

export default HomePage;