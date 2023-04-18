export type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
export type SizeLiteral = Partial<Record<SizeVariant, string>>;

export type SizeItems = 'font';

export type ThemeSizes = Record<SizeItems, SizeLiteral>;

export type ColorVariant = 'primary' | 'secondary' | 'error' | 'success' | 'warning';

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
    };
    gradient: Partial<Record<ColorSet, string>>;
  } & Record<ColorVariant, ColorSetRecord>;
  shadow: object;
  weight: object;
};
