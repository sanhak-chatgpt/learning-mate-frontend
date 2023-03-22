import { Main } from 'next/document';
export type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
export type SizeLiteral = Record<SizeVariant, string>;

export type SizeItems = 'font';

export type ThemeSizes = Record<SizeItems, SizeLiteral>;

export type ColorVariant =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'success'
  | 'warning';

export type ColorSet = 'main' | 'light' | 'dark';

export type ColorSetRecord = Record<ColorSet, string>;

export type BaseTheme = {
  size: ThemeSizes;
  color: {
    type: 'light' | 'dark';
    text: {
      primary: string;
      secondary: string;
      disabled: string;
      hint: string;
    };
    background: {
      default: string;
      paper: string;
    };
  } & Record<ColorVariant, ColorSetRecord>;
  shadow: {
    default: string;
  };
};
