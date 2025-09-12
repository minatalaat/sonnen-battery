import styled from 'styled-components';
import type { ThemeType } from '../../../themes/theme.types';

export const StyledButton = styled.button<{ theme: ThemeType }>`
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.boxShadow.s4};
  background-color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hightLightColor};
  }
`;
