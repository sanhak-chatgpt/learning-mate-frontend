import { BaseTheme } from './Theme.type';

export const DEFAULT_THEME: BaseTheme = {
  size: {
    font: {
      xs: '1.3rem',
      sm: '1.4rem',
      md: '1.5rem',
      lg: '1.6rem',
      xl: '2rem',
      xxl: '2.4rem',
    },
    viewport: {
      mobile: '768px',
    },
  },
  color: {
    type: 'dark',
    text: {
      g0: '#161D24',
      g1: '#000000',
      g2: '#4E5966',
      g3: '#76808B',
      g4: '#F2F4F7',
    },
    background: {
      default: 'rgba(255, 255, 255, 1)',
      darker: 'rgba(242, 244, 246, 1)',
    },
    nav: {
      active: '#54A6F1',
      disabled: '#E2E4E9',
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
