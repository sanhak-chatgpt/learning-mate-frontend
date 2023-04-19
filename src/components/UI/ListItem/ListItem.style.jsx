import styled from '@emotion/styled';

//그냥 listitem
export const ListItemWrapper = styled.div`
    position: relative;
    width: 331px;
    height: 82px;
    box-sizing: border-box;
    border-bottom: 1px solid #F1F3F8;
    background-color: #FFFFFF;
`;

//icon 있는 listitem
export const ListItemWrapperWithIcon = styled.div`
    position: relative;
    width: 374px;
    height: 86px;  
    background: #FFFFFF;
`;

//title 만 있는 listitem
export const ListItemWrapperOnlyTitle = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 331px;
    height: 72px;
    background: #FFFFFF;
    border-bottom: 1px solid #F1F3F8;
`;

//title과 description만 있는 경우
export const TitleStyle = styled.div`
    position: absolute;
    left: 0%;
    right: 70.69%;
    top: 24.39%;
    bottom: 52.44%;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;

    color: #4E5966;
`;

//title과 icon, description이 있는 경우
export const TitleWithIconStyle = styled.div`
    position: absolute;
    left: 21.39%;
    right: 33.69%;
    top: 26.74%;
    bottom: 52.33%;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: ${({ theme }) => theme.size.font.md};
    line-height: 18px;
    color: ${({ theme }) => theme.color.text.g0};
`;

//title 만 있는 경우
export const TitleOnlyStyle = styled.div`
    position: absolute;
    left: 0%;
    right: 72.51%;
    top: 37.5%;
    bottom: 37.5%;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: #4E5966;
`;

export const IconStyle = styled.div`
    position: absolute;
    left: 5.35%;
    right: 81.28%;
    top: 20.93%;
    bottom: 20.93%;
`;

//icon이 있는 description
export const DescriptionWithIconStlye = styled.div`
    position: absolute;
    left: 21.39%;
    right: 24.33%;
    top: 54.65%;
    bottom: 26.74%;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;

    color: ${({ theme }) => theme.color.text.g3};
`;

//그냥 description
export const DescriptionStyle = styled.div`
    position: absolute;
    left: 0%;
    right: 9.67%;
    top: 52.44%;
    bottom: 24.39%;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;

    color: ${({ theme }) => theme.color.text.g3};
`;

