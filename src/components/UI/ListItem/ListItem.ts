import React from "react";
import { TitleProps } from './Title';
import { DescriptionProps } from "./Description";
import { IconProps } from "./Icon"
//import { styled } from "@tanstack/react-query-devtools/build/lib/utils";
import styled from '@emotion/styled';

interface ListItemProps {
  title: TitleProps;
  description: DescriptionProps;
  icon?: IconProps;
}

const ListItemWarpper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 331px;
  height: 82px;
  background: #FFFFFF;
  border-bottom: 1px solid #F1F3F8;
`;

export const ListItem: React.FC<ListItemProps> = ({ title, description, icon } : ListItemProps) => {
  return (
  );
};


export default ListItem;
