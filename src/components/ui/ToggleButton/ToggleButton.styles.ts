import styled from 'styled-components';
import type { ThemeType } from '../../../themes/theme.types';
import { popIn } from '../../../styles/animations';

export const ToggleInput = styled.input<{ theme: ThemeType }>`
  appearance: none;
  width: 2.5rem;
  height: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: ${({ theme }) => theme.colors.liteSecondary};
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:checked {
    background-color: ${({ theme }) => theme.colors.primary};
    animation-name: ${() => popIn()};
    animation-duration: 0.3s;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &:checked::after {
    transform: translateX(1rem);
  }

  &::after {
    content: '';
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: ${({ theme }) => theme.borderRadius.circle};
    background-color: ${({ theme }) => theme.colors.secondary};
    top: 0.17rem;
    left: 0.17rem;
    transition: transform 0.2s ease;
  }
`;
