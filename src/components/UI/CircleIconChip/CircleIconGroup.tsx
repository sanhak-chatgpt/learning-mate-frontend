import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext } from "react";
import { CircleIconContext } from "./CircleIconContext";

type CircleIconGroupProps = {
    children: ReactNode;
    values: ReactNode;
    onChange: Dispatch<SetStateAction<string>>;
}

export const CircleIconGroup = ({ children, values, onChange }: CircleIconGroupProps) => {
    const isChecked = (value: any) => values === value;
    const toggleValue = (value: any) => {
        if(value===values){
            onChange("");
        }
        else{
            onChange(value);
        }
    }
    
    return(
        <CircleIconContext.Provider value={{ isChecked, toggleValue }}>
            {children}
        </CircleIconContext.Provider>
    )
};