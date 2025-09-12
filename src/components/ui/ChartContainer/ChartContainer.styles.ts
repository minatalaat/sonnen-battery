import styled from 'styled-components';
import type { ThemeType } from '../../../themes/theme.types';

export const StyledChartContainer = styled.div<{ theme: ThemeType }>`
  border: ${({ theme }) => ` 2px solid ${theme.colors.border}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.boxShadow.s3};
  width: 100%;
  height: 300px;
`;
