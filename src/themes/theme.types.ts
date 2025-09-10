import type { ColorsType } from './colors/colors.types';

export interface ThemeType {
  colors: ColorsType;
  spacing: {
    xxs: string;
    xs: string;
    s: string;
    sm: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
  };
  typoGraphy: {
    fontWeight: {
      bold: number;
      semiBold: number;
      regular: number;
      light: number;
    };
    fontSize: {
      s1: string;
      s2: string;
      s3: string;
      s4: string;
      s5: string;
    };
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    circle: string;
  };
}
