import styled from '@emotion/styled'
import { Flex } from '@/components/UI/FlexBox';

export const Root = styled.div`
    width: 100%;

    background: ${({ theme }) => theme.color.background.default};
`;

export const Wrapper = styled(Flex)`
    & p {
        padding: 4rem 0 0.9rem 2.2rem
        font-weight: 700;
        font-size: ${({ theme }) => theme.size.font.sm};
        line-height: 140%;
        align-items: start;
        color: ${({ theme }) => theme.color.text.g3};
    }

    .Box {
        width: 100%;
        height: 8px;
        background: ${({ theme }) => theme.color.text.g4};
        flex: none;
    }
`;