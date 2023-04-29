import styled from '@emotion/styled';

//그냥 listitem
export const ListItemWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 82px;
    border-bottom: 1px solid #F1F3F8;
    background: ${({ theme }) => theme.color.background.default};
`;

//title과 description만 있는 경우
export const TitleStyle = styled.div`
    position: absolute;
    left: 0%;
    right: 70.69%;
    top: 24.39%;
    bottom: 52.44%;

    font-family: 
    font-weight: 600;
    font-size: ${({ theme }) => theme.size.font.md};
    line-height: 18px;

    color: ${({ theme }) => theme.color.text.g2};
`;

export const IconStyle = styled.div`
    position: absolute;
    left: 5.35%;
    right: 81.28%;
    top: 20.93%;
    bottom: 20.93%;
`;

//그냥 description
export const DescriptionStyle = styled.div`
    position: absolute;
    left: 0%;
    right: 9.67%;
    top: 52.44%;
    bottom: 24.39%;

    font-weight: 400;
    font-size: ${({ theme }) => theme.size.font.xs};
    line-height: 16px;

    color: ${({ theme }) => theme.color.text.g3};
`;

