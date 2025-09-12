import styled from 'styled-components';
import type { ThemeType } from '../../../themes/theme.types';

export const StyledAppErrorBoundary = styled.div<{ theme: ThemeType }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.s};
  padding: ${({ theme }) => theme.spacing.sm};
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.boxShadow.s4};
  p {
    margin: 0;
  }
`;
