import styled from 'styled-components';
import type { ThemeType } from '../../../../themes/theme.types';

export const TooltipContainer = styled.div<{ theme: ThemeType }>`
  background-color: ${({ theme }) => theme.colors.background};
  border: ${({ theme }) => `1px solid ${theme.colors.border}`};
  box-shadow: ${({ theme }) => theme.boxShadow.s3};
  padding: ${({ theme }) => theme.spacing.sm};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  height: 20px !important;
  width: 50px !important;
  .content {
    height: min-content;
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.xxs};
    align-items: center;
  }
`;
