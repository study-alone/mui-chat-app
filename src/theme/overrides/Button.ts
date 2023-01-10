import type { Theme, Components } from '@mui/material'

declare module '@mui/material' {
	interface ButtonPropsVariantOverrides {
		containedNoneHover: true
	}
}

// ----------------------------------------------------------------------
type ButtonTheme = { MuiButton: Components['MuiButton'] }
export default function Button(theme: Theme): ButtonTheme {
	const isLight = theme.palette.mode === 'light'
	const { palette, customShadows } = theme
	const containedNoneHoverColor = isLight ? theme.palette.common.white : theme.palette.grey[800]

	return {
		MuiButton: {
			styleOverrides: {
				root: {
					'&:hover': {
						boxShadow: 'none',
					},
				},
				sizeLarge: {
					height: 48,
				},
				// contained
				containedInherit: {
					color: palette.grey[800],
					boxShadow: customShadows.z8,
					'&:hover': {
						backgroundColor: palette.grey[400],
					},
				},
				containedPrimary: {
					boxShadow: customShadows.primary,
				},
				containedSecondary: {
					boxShadow: customShadows.secondary,
				},
				containedInfo: {
					boxShadow: customShadows.info,
				},
				containedSuccess: {
					boxShadow: customShadows.success,
				},
				containedWarning: {
					boxShadow: customShadows.warning,
				},
				containedError: {
					boxShadow: customShadows.error,
				},
				// outlined
				outlinedInherit: {
					border: `1px solid ${palette.grey[500_32]}`,
					'&:hover': {
						backgroundColor: palette.action.hover,
					},
				},
				textInherit: {
					'&:hover': {
						backgroundColor: palette.action.hover,
					},
				},
			},
			variants: [
				{
					props: { variant: 'containedNoneHover' },
					style: {
						backgroundColor: palette.text.primary,
						color: containedNoneHoverColor,
						'&:hover': {
							backgroundColor: palette.text.primary,
							color: containedNoneHoverColor,
						},
					},
				},
			],
		},
	}
}
