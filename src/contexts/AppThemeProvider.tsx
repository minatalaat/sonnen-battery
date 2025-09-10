import { useMemo, useState, type ReactNode } from "react"
import { AppTheme } from "./AppTheme"
import { MODES } from "../constants/modes"
import { darkTheme } from "../themes/darkTheme"
import { liteTheme } from "../themes/liteTheme"
import { ThemeProvider } from 'styled-components';


interface AppThemeProviderType {
    children: ReactNode
}

const AppThemeProvider: React.FC<AppThemeProviderType> = ({ children }) => {
    const [mode, setMode] = useState<string>(MODES.LITE)

    const toggleTheme = () => {
        if (mode === MODES.LITE) return setMode(MODES.DARK)
        return setMode(MODES.LITE)
    }

    const theme = useMemo(() => {
        if (mode === MODES.DARK) return darkTheme;
        return liteTheme
    }, [mode])

    const contextValue = useMemo(() => {
        return { theme, toggleTheme }
    }, [theme])

    return (
        <AppTheme.Provider value={contextValue}><ThemeProvider theme={theme}> {children} </ThemeProvider></AppTheme.Provider>
    )
}

export default AppThemeProvider