import React from "react";
import {Title} from "./Title";
import {Description} from "./Description";
import {Icon} from "./Icon"
import { styled } from "@tanstack/react-query-devtools/build/lib/utils";

interface ListItemProps {
  title: string;
  description: string;
  icon?: string;
}

export const ListItem: React.FC<ListItemProps> = ({ title, description, icon }) => {
  return (
    React.createElement('div',Title, description, icon)
  );
};


export default ListItem;
