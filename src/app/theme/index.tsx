// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// TODO Fix this problem with eslint and types
import React from 'react'
import { useMemo } from 'react'
import { CssBaseline, Button } from '@mui/material'
import { LayoutProps } from '../../shared/models/index'
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles'
import palette from './palette'
import typography from './typography'
import shadows, { customShadows } from './shadows'
import componentsOverride from './overrides'

const ThemeProvider = ({ children }: LayoutProps) => {
	const themeOptions = useMemo(
		() => ({
			palette,
			shape: { borderRadius: 5 },
			typography,
			shadows,
			customShadows
		}),
		[]
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

export { ThemeProvider }
