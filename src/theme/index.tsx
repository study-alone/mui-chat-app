import React, { useMemo } from 'react'
// @mui
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material/styles'
// hooks
import useSettings from '@hooks/useSettings'
//
import palette from '@theme/palette'
import typography from '@theme/typography'
import breakpoints from '@theme/breakpoints'
import componentsOverride from '@theme/overrides'
import shadows, { customShadows } from '@theme/shadows'

import type { ThemeOptions } from '@mui/material/styles'

// ----------------------------------------------------------------------
const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const { themeMode, themeDirection } = useSettings()

	const isLight = themeMode === 'light'

	const themeOptions = useMemo<ThemeOptions>(
		() => ({
			palette: isLight ? palette.light : palette.dark,
			typography,
			breakpoints,
			shape: { borderRadius: 8 },
			direction: themeDirection,
			shadows: isLight ? shadows.light : shadows.dark,
			customShadows: isLight ? customShadows.light : customShadows.dark,
		}),
		[isLight, themeDirection],
	)

	const theme = createTheme(themeOptions)

	theme.components = componentsOverride(theme)

	return (
		<StyledEngineProvider injectFirst>
			<MUIThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</MUIThemeProvider>
		</StyledEngineProvider>
	)
}

export default ThemeProvider
