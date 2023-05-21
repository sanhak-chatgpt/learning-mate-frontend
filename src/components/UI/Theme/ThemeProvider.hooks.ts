import { ThemeKey, themeKeyState, themeState } from "@/states/state.theme";
import { localStorageManager } from "@/util/models/Storage";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";



export const useControllTheme = () => {
  
  const [themeKey, setThemeKey] = useRecoilState(themeKeyState)

  //init Theme

  return {
    themeKey,
    setThemeKey
  }
}