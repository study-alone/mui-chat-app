import { useTheme } from '@mui/material/styles'
import useResponsive from '@hooks/useResponsive'

import type { CSSProperties, Variant } from '@mui/material/styles/createTypography'
import type { Breakpoint } from '@mui/material/styles'

// ----------------------------------------------------------------------
export default function GetFontValue(variant: Variant) {
	const { typography, breakpoints } = useTheme()
	const breakpointsWidth = useWidth()
	const key = breakpoints.up(breakpointsWidth === 'xl' ? 'lg' : breakpointsWidth) as Breakpoint
	const hasResponsive = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].some((item) => item === variant)
	const predicate = !!(hasResponsive && typography[variant][key])
	const getFont = (predicate ? typography[variant][key] : typography[variant]) as CSSProperties
	const fontSize = remToPx(getFont.fontSize)
	const lineHeight = Number(typography[variant].lineHeight) * fontSize
	const { fontWeight } = typography[variant]
	const { letterSpacing } = typography[variant]

	return { fontSize, lineHeight, fontWeight, letterSpacing }
}

// ----------------------------------------------------------------------

export function remToPx(value?: string | number) {
	return Math.round(parseFloat(`${value}`) * 16)
}

export function pxToRem(value: number) {
	return `${value / 16}rem`
}

export function responsiveFontSizes({ sm, md, lg }: { sm: number; md: number; lg: number }) {
	return {
		'@media (min-width:600px)': {
			fontSize: pxToRem(sm),
		},
		'@media (min-width:900px)': {
			fontSize: pxToRem(md),
		},
		'@media (min-width:1200px)': {
			fontSize: pxToRem(lg),
		},
	}
}

// ----------------------------------------------------------------------

function useWidth() {
	const theme = useTheme()
	const keys = [...theme.breakpoints.keys].reverse()

	return (
		keys.reduce<null | Breakpoint>((output, key) => {
			// eslint-disable-next-line react-hooks/rules-of-hooks
			const matches = useResponsive('up', key)

			return !output && matches ? key : output
		}, null) || 'xs'
	)
}
