import { useMemo, useState, type ReactNode } from "react"
import { AppTheme } from "./AppTheme"
import { MODES } from "../constants/modes"
import { ThemeProvider } from 'styled-components';
import { appTheme } from "../themes/theme"
import { darkColors, liteColors } from "../themes/colors/colors"


interface AppThemeProviderType {
    children: ReactNode
}

const AppThemeProvider: React.FC<AppThemeProviderType> = ({ children }) => {
    const [mode, setMode] = useState<string>(MODES.LITE)

    const toggleTheme = () => {
        if (mode === MODES.LITE) return setMode(MODES.DARK)
        return setMode(MODES.LITE)
    }

    const modetheme = useMemo(() => {
        if (mode === MODES.DARK) return { ...appTheme, colors: darkColors };
        return { ...appTheme, colors: liteColors };
    }, [mode])

    const contextValue = useMemo(() => {
        return { theme: modetheme, toggleTheme }
    }, [modetheme])

    return (
        <AppTheme.Provider value={contextValue}><ThemeProvider theme={modetheme}> {children} </ThemeProvider></AppTheme.Provider>
    )
}

export default AppThemeProvider