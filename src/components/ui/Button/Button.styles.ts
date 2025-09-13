import styled from 'styled-components';
import type { ThemeType } from '../../../themes/theme.types';
import { pulse } from '../../../styles/animations';

export const StyledButton = styled.button<{ theme: ThemeType }>`
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.boxShadow.s4};
  background-color: ${({ theme }) => theme.colors.liteSecondary};
  font-size: ${({ theme }) => theme.typoGraphy.fontSize.s3};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.liteSecondary};
    animation-name: ${({ theme }) => pulse(theme)};
    animation-duration: 2s;
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
`;
