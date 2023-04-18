import styled from '@emotion/styled'

export const Root = styled.div`
    position: relative;
    width: 375px;
    height: 812px;
    background: #FFFFFF;
`;

export const Wrapper = styled.div`
    
`;

//ai에게 가르키고 피드백 받기, 다른고수의 강의... frm 14570
export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: absolute;
    width: 375px;
    height: 180px;
    left: 0px;
    top: 281px;

    & p {
        position: absolute;
        width: 108px;
        height: 20px;
        left: 22px;
        top: 252px;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 140%;
        display: flex;
        align-items: center;
        color: #76808B;
    }

    .Box {
        width: 375px;
        height: 8px;
        background: #F2F4F7;

        flex: none;
        order: 1;
        flex-grow: 0;
    }
`;

