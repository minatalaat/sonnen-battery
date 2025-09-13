import { useMemo, useState, useCallback, type ReactNode, useEffect } from 'react';
import { AppTheme } from './AppTheme';
import { MODES } from '../constants/modes.contants';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../themes/theme';
import { darkColors, lightColors } from '../themes/colors/colors';

interface AppThemeProviderType {
  children: ReactNode;
}

const AppThemeProvider: React.FC<AppThemeProviderType> = ({ children }) => {
  const [mode, setMode] = useState<string | null>(MODES.DARK);

  const toggleTheme = useCallback(() => {
    if (mode === MODES.LIGHT) {
      localStorage.setItem('mode', MODES.DARK);
      setMode(MODES.DARK);
    } else {
      localStorage.setItem('mode', MODES.LIGHT);
      setMode(MODES.LIGHT);
    }
  }, [mode]);

  const modetheme = useMemo(() => {
    if (mode === MODES.DARK) return { ...appTheme, colors: darkColors };
    return { ...appTheme, colors: lightColors };
  }, [mode]);

  const contextValue = useMemo(() => {
    return { theme: modetheme, mode, toggleTheme };
  }, [mode, modetheme, toggleTheme]);

  useEffect(() => {
    setMode(MODES.DARK);
  }, []);
  return (
    <AppTheme.Provider value={contextValue}>
      <ThemeProvider theme={modetheme}>{children}</ThemeProvider>
    </AppTheme.Provider>
  );
};

export default AppThemeProvider;
