import { BaseTheme } from './Theme.type';

export const DEFAULT_THEME: BaseTheme = {
  size: {
    font: {
      xs: '13px',
      sm: '14px',
      md: '15px',
      lg: '16px',
      xl: '20px',
      xxl: '24px',
    },
  },
  color: {
    type: 'dark',
    text: {
      g0: '#161D24',
      g1: '#000000',
      g2: '#4E5966',
      g3: '#76808B',
    },
    background: {
      default: '#202529',
    },
    gradient: {
      main: 'linear-gradient(97.91deg, #FE82DB 6.1%, #68E4FF 103.66%)',
      light:
        'linear-gradient(94.66deg, rgba(254, 130, 219, 0.2) -2.1%, rgba(104, 228, 255, 0.2) 108.41%)',
    },
    primary: {
      main: 'rgba(104, 228, 255, 1)',
    },
    secondary: {
      main: 'rgba(254, 130, 219, 1)',
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
    default: '0px 0px 30px rgba(0, 0, 0, 0.08);',
  },
  weight: {},
};
