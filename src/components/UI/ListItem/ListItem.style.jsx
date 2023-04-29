import styled from '@emotion/styled';

//그냥 listitem
export const ListItemWrapper = styled.div`
    border-bottom: 1px solid #F1F3F8;
    background: ${({ theme }) => theme.color.background.default};
`;

//title과 description만 있는 경우
export const TitleStyle = styled.div`
    font-weight: 600;
    font-size: ${({ theme }) => theme.size.font.md};
    line-height: 18px;

    color: ${({ theme }) => theme.color.text.g2};
`;

export const IconStyle = styled.div`
`;

//그냥 description
export const DescriptionStyle = styled.div`
    font-weight: 400;
    font-size: ${({ theme }) => theme.size.font.xs};
    line-height: 16px;

    color: ${({ theme }) => theme.color.text.g3};
`;

