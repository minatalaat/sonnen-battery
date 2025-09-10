import type { ReactNode } from 'react';

export type FontWeight = 'bold' | 'semiBold' | 'regular' | 'light';
export type FontSize = 's1' | 's2' | 's3' | 's4' | 's5';
export type TypographyVariant = 'smText' | 'mdText' | 'lgText' | 'xlText' | 'xxlText';

export interface TypographyType {
  variant: TypographyVariant;
  weight?: FontWeight;
  fontSize?: FontSize;
  children: ReactNode;
  color?: string;
}
