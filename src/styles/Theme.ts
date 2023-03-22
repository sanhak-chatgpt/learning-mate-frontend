import { BaseTheme } from './Theme.type';

export const DEFAULT_THEME: BaseTheme = {
  size: {
    font: {
      xs: '0.7rem',
      sm: '0.85rem',
      md: '1rem',
      lg: '1.15rem',
      xl: '1.3rem',
      xxl: '1.4rem',
      xxxl: '1.5rem',
    },
  },
  color: {
    type: 'dark',
    text: {
      primary: '#d0f1ff',
      secondary: '#ffffff',
      disabled: 'rgba(255,255,255,0.25)',
      hint: 'rgba(16,212,159,0.99)',
    },
    background: {
      default: '#202529',
      paper: '#1F2833',
    },
    primary: {
      main: '#66FCF1',
      light: 'rgb(132, 252, 243)',
      dark: 'rgb(71, 176, 168)',
    },
    secondary: {
      main: '#45A29E',
      light: 'rgb(106, 180, 177)',
      dark: 'rgb(48, 113, 110)',
    },
    success: {
      main: '#00bf8e',
      light: 'rgb(51, 203, 164)',
      dark: 'rgb(0, 133, 99)',
    },
    warning: {
      main: '#f7c94b',
      light: 'rgb(248, 211, 111)',
      dark: 'rgb(172, 140, 52)',
    },
    error: {
      main: '#f75842',
      light: 'rgb(248, 121, 103)',
      dark: 'rgb(172, 61, 46)',
    },
  },
  shadow: {
    default: 'rgba(100, 200, 250, 0.07) 0px 4px 12px',
  },
};
