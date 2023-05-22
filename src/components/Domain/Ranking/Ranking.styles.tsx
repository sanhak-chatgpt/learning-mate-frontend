import styled from "@emotion/styled";
import { Flex } from '@/components/UI/FlexBox';

export const Root = styled(Flex)`
    width: 100%;
    height: auto;

    & h4{
        font-size: ${({ theme }) => theme.size.font.sm};
        color: ${({ theme }) => theme.color.text.g3};
        font-weight: 500;
        line-height: 140%;
    }
`;

export const IconWrapper = styled.div`
    width: auto;
    height: auto;
    padding-bottom: 3.0rem;
    padding-top: 5.0rem;
`;
