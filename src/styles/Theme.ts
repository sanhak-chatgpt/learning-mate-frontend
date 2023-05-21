import { ThemeKey } from '@/states/state.theme';
import { BaseTheme, Color } from './Theme.type';


export const DEFAULT_COLOR_SET:Color = {
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
}

export const INVERTED_COLOR_SET:Color = {
    type: 'light',
    text: {
      g0: '#E9E2DB',
      g1: '#FFFFFF',
      g2: '#B1A699',
      g3: '#897F74',
      g4: '#0D0B08',
    },
    background: {
      default: 'rgba(0, 0, 0, 1)',
      darker: 'rgba(13, 11, 9, 1)',
    },
    nav: {
      active: '#54A6F1',
      disabled: '#1D1B16',
    },
    gradient: {
      main: 'linear-gradient(97.91deg, #0182D4 6.1%, #97B200 103.66%)',
      light:
        'linear-gradient(94.66deg, rgba(1, 130, 219, 0.2) -2.1%, rgba(151, 178, 0, 0.2) 108.41%)',
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
}

export const COLOR_SETS:Record<ThemeKey,Color> = {
  default:DEFAULT_COLOR_SET,
  dark:INVERTED_COLOR_SET
}


export const createTheme = (colorType:ThemeKey) => {
  return {
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
    color: COLOR_SETS[colorType],
    shadow: {
      default: '0px 0px 30px rgba(0, 0, 0, 0.08);',
    },
    weight: {},
  };
}