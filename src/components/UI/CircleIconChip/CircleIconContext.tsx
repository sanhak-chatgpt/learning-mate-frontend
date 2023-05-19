import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext } from "react";

type CircleIconContextProps = {
    isChecked: (value?: string) => boolean;
    toggleValue: (checked?: string, value?: string) => void;
};

export const CircleIconContext = createContext<CircleIconContextProps | null>(null);
