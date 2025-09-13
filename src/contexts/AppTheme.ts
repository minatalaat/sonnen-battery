import { createContext, useContext } from 'react';
import type { ThemeType } from '../themes/theme.types';

interface AppThemeType {
  theme: ThemeType;
  mode: string;
  toggleTheme: (value: void) => void;
}

const defaultAppTheme: AppThemeType = {
  theme: {} as ThemeType,
  mode: '',
  toggleTheme: () => {},
};

export const AppTheme = createContext<AppThemeType>(defaultAppTheme);
export const useAppTheme = () => {
  const context = useContext<AppThemeType>(AppTheme);

  return context;
};
