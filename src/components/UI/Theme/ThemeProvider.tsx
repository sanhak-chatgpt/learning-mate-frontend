import { themeState } from "@/states/state.theme"
import { useRecoilValue } from "recoil"
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

export type ThemeProviderProps =  React.PropsWithChildren<{
}>


export const ThemeProvider = ({children}:ThemeProviderProps) => {
  const theme = useRecoilValue(themeState)


  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
}