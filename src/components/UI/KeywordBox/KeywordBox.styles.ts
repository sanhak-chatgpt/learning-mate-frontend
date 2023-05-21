import styled from "@emotion/styled";
import { Flex } from "../FlexBox";


export const Container = styled(Flex)`
  box-sizing: border-box; 
  width:100%;
  & span {
    width:100%;
    display: block;
    font-size:${({theme})=>theme.size.font.xl};
    line-height:140%;
    color:${({theme})=>theme.color.text.g0};
    font-weight:700;
  }
  
`
