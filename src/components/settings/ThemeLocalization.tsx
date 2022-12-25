import React from 'react'
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles'
import useLocales from '@hooks/useLocales'

// ----------------------------------------------------------------------

const ThemeLocalization: React.FC<React.PropsWithChildren> = ({ children }) => {
	const defaultTheme = useTheme()

	const { currentLang } = useLocales()

	const theme = createTheme(defaultTheme, currentLang.systemValue)

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeLocalization
