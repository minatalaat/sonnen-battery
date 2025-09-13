import { keyframes } from 'styled-components';
import type { ThemeType } from '../themes/theme.types';

export const popIn = () => {
  return keyframes`
     0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
    `;
};

export const pulse = (theme: ThemeType) => {
  return keyframes`
      0% {
      transform: scale(1);
      box-shadow: ${() => `0 0 0 0 ${theme.colors.hightLightColor}`};
    }
    70% {
      transform: scale(1.05);
      box-shadow: ${() => `0 0 0 10px ${theme.colors.background}`};
    }
    100% {
      transform: scale(1);
      box-shadow: ${() => `0 0 0 0 ${theme.colors.hightLightColor}`};
    }
    `;
};
