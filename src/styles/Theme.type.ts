import { Dictionary } from '@/types';

export type SizeItemLiteral = 'font' | 'viewport';
export type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
export type Size = Partial<Record<SizeVariant, string>> & Dictionary;

export type ThemeSizes = Record<SizeItemLiteral, Size>;

export type ColorItemLiteral = 'primary' | 'secondary' | 'error' | 'success' | 'warning';
export type ColorSet = 'main' | 'light' | 'dark';

export type ColorSetRecord = Partial<Record<ColorSet, string>>;

export type TextColorVariant = 'g0' | 'g3';

export type TextColor = Record<TextColorVariant, string> & { [Key: string]: string };

export type BaseTheme = {
  size: ThemeSizes;
  color: {
    type: 'light' | 'dark';
    text: TextColor;
    background: {
      default: string;
      darker: string;
    };
    gradient: Partial<Record<ColorSet, string>>;
    nav: {
      active: string;
      disabled: string;
    };
  } & Record<ColorItemLiteral, ColorSetRecord>;
  shadow: { default: string };
  weight: object;
};
