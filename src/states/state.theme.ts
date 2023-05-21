import { createTheme } from '@/styles/Theme';
import { BaseTheme } from '@/styles/Theme.type';
import { localStorageManager } from '@/util/models/Storage'
import { atom, selector } from 'recoil'




export const ATOM_THEME_KEY = 'theme'
export const SELECTOR_THEME_KEY = 'theme_key'

export type ThemeKey = 'default' | 'dark';


export const themeKeyState = atom<{theme:ThemeKey}>({
  key:ATOM_THEME_KEY,
  default:{
    theme:'default'
  },
})

export const themeState = selector<BaseTheme>({
  key:SELECTOR_THEME_KEY,
  get:({get})=>{
    const {theme} = get(themeKeyState);
    return createTheme(theme) as BaseTheme;
  }
})