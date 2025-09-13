import { useMemo, useState, useCallback, type ReactNode } from 'react';
import { AppTheme } from './AppTheme';
import { MODES } from '../constants/modes.contants';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../themes/theme';
import { darkColors, liteColors } from '../themes/colors/colors';

interface AppThemeProviderType {
  children: ReactNode;
}

const AppThemeProvider: React.FC<AppThemeProviderType> = ({ children }) => {
  const localMode = localStorage.getItem('mode');
  const [mode, setMode] = useState<string>(localMode ?? MODES.LITE);

  const toggleTheme = useCallback(() => {
    if (mode === MODES.LITE) {
      localStorage.setItem('mode', MODES.DARK);
      setMode(MODES.DARK);
    } else {
      localStorage.setItem('mode', MODES.LITE);
      setMode(MODES.LITE);
    }
  }, [mode]);

  const modetheme = useMemo(() => {
    if (mode === MODES.DARK) return { ...appTheme, colors: darkColors };
    return { ...appTheme, colors: liteColors };
  }, [mode]);

  const contextValue = useMemo(() => {
    return { theme: modetheme, toggleTheme };
  }, [modetheme, toggleTheme]);

  return (
    <AppTheme.Provider value={contextValue}>
      <ThemeProvider theme={modetheme}> {children} </ThemeProvider>
    </AppTheme.Provider>
  );
};

export default AppThemeProvider;
