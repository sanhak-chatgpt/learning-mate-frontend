import { ThemeKey, themeKeyState, themeState } from "@/states/state.theme"
import { useRecoilState, useRecoilValue } from "recoil"
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { localStorageManager } from "@/util/models/Storage";
import { useEffect } from "react";
import { useControllTheme } from "./ThemeProvider.hooks";

export type ThemeProviderProps =  React.PropsWithChildren<any>


export const ThemeProvider = ({children}:ThemeProviderProps) => {
  const theme = useRecoilValue(themeState);
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
}