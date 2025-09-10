import styled from 'styled-components';
import type { ThemeType } from '../../../themes/theme.types';

export const StyledAppLayout = styled.div<{ theme: ThemeType }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.background};
`;
