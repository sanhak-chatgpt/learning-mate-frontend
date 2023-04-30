import styled from '@emotion/styled';

//그냥 listitem
export const ListItemWrapper = styled.div`
    width: 100%;
    height: auto;
    border-bottom: 1px solid #F1F3F8;
    background: ${({ theme }) => theme.color.background.default};
`;

//title과 description만 있는 경우
export const TitleStyle = styled.div`
    font-weight: 600;
    font-size: ${({ theme }) => theme.size.font.md};
    line-height: 18px;

    padding-top: 2.2rem;
    padding-bottom: 0.6rem;
    padding-left: 1rem;

    color: ${({ theme }) => theme.color.text.g2};
`;

export const IconStyle = styled.div`
`;

//그냥 description
export const DescriptionStyle = styled.div`
    font-weight: 400;
    font-size: ${({ theme }) => theme.size.font.xs};
    line-height: 16px;

    padding-bottom: 2.3rem;
    padding-left: 1rem;

    color: ${({ theme }) => theme.color.text.g3};
`;

