import styled from 'styled-components';
import type { ThemeType } from '../../../themes/theme.types';

export const StyledButton = styled.button<{ theme: ThemeType }>`
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.boxShadow.s4};
  background-color: ${({ theme }) => theme.colors.liteSecondary};
  font-size: ${({ theme }) => theme.typoGraphy.fontSize.s3};
  cursor: pointer;
  @keyframes pulse-animation {
    0% {
      transform: scale(1);
      box-shadow: ${({ theme }) => `0 0 0 0 ${theme.colors.hightLightColor}`};
    }
    70% {
      transform: scale(1.05);
      box-shadow: ${({ theme }) => `0 0 0 10px ${theme.colors.background}`};
    }
    100% {
      transform: scale(1);
      box-shadow: ${({ theme }) => `0 0 0 0 ${theme.colors.hightLightColor}`};
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.liteSecondary};
    animation: pulse-animation 2s infinite cubic-bezier(0.4, 0, 0.6, 1);
  }
`;
