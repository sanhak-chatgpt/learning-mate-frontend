import { ThemeKey, themeKeyState, themeState } from "@/states/state.theme";
import { localStorageManager } from "@/util/models/Storage";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";



export const useControllTheme = () => {
  const theme = useRecoilValue(themeState)
  const [themeKey, setThemeKey] = useRecoilState(themeKeyState)

  //init Theme
  useEffect(() => {
    const storage_theme_key = localStorageManager.getItem('storage_theme');
    if(!!storage_theme_key) {
      localStorageManager.setItem("storage_theme", "default");
    }
    else{
      setThemeKey({ theme: storage_theme_key as ThemeKey })
    }
  }, []);

  return {
    theme,
    themeKey,
    setThemeKey
  }
}