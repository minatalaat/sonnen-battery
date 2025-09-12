import styled from 'styled-components';
import type { ThemeType } from '../../../../themes/theme.types';

export const StyledLegendContainer = styled.div<{ theme: ThemeType }>`
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const StyledLegend = styled.div<{ theme: ThemeType }>`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.s};
`;

export const StatusIndicator = styled.div<{ theme: ThemeType; $color: string }>`
  width: ${({ theme }) => theme.spacing.sm};
  height: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  background-color: ${({ $color }) => $color};
`;
