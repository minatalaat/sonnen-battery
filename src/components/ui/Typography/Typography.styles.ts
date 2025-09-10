import styled, { css } from 'styled-components';
import type { FontSize, FontWeight, TypographyVariant } from './Typography.types';
import type { ThemeType } from '../../../themes/theme.types';

const getDefaultTypoStyle = ({ $color, $weight, theme }: { $color?: string; $weight?: FontWeight; theme: ThemeType }) => {
  return css`
    font-weight: ${$weight ? theme.typoGraphy.fontWeight[$weight] : theme.typoGraphy.fontWeight.regular};
    color: ${$color ?? theme.colors.primary};
    font-family: 'Roboto', sans-serif;
  `;
};
const getTypographyStyle = ({
  variant,
  theme,
  $weight,
  $fontSize,
  $color,
}: {
  variant?: TypographyVariant;
  theme: ThemeType;
  $weight?: FontWeight;
  $fontSize?: FontSize;
  $color?: string;
}) => {
  if (variant === 'smText')
    return css`
      font-size: ${$fontSize ? theme.typoGraphy.fontSize[$fontSize] : theme.typoGraphy.fontSize.s1};
      ${() => getDefaultTypoStyle({ $color, $weight, theme })}
    `;
  if (variant === 'mdText')
    return css`
      font-size: ${$fontSize ? theme.typoGraphy.fontSize[$fontSize] : theme.typoGraphy.fontSize.s2};
      ${() => getDefaultTypoStyle({ $color, $weight, theme })}
    `;
  if (variant === 'lgText')
    return css`
      font-size: ${$fontSize ? theme.typoGraphy.fontSize[$fontSize] : theme.typoGraphy.fontSize.s3};
      ${() => getDefaultTypoStyle({ $color, $weight, theme })};
    `;
  if (variant === 'xlText')
    return css`
      font-size: ${$fontSize ? theme.typoGraphy.fontSize[$fontSize] : theme.typoGraphy.fontSize.s4};
      ${() => getDefaultTypoStyle({ $color, $weight, theme })}
    `;
  if (variant === 'xxlText')
    return css`
      font-size: ${$fontSize ? theme.typoGraphy.fontSize[$fontSize] : theme.typoGraphy.fontSize.s5};
      ${() => getDefaultTypoStyle({ $color, $weight, theme })}
    `;
};
export const StyledTypography = styled.p<{
  variant: TypographyVariant;
  $color?: string;
  theme: ThemeType;
  $weight?: FontWeight;
  $fontSize?: FontSize;
}>`
  ${({ variant, $color, theme, $weight, $fontSize }) => getTypographyStyle({ variant, $color, theme, $weight, $fontSize })}
`;
