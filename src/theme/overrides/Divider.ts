import type { Components, Theme } from '@mui/material'

declare module '@mui/material' {
	interface DividerPropsVariantOverrides {
		dashed: true
		dashedAndSpacing: true
	}
}

// ----------------------------------------------------------------------
type DividerTheme = { MuiDivider: Components['MuiDivider'] }

export default function Divider(theme: Theme): DividerTheme {
	return {
		MuiDivider: {
			variants: [
				{
					props: { variant: 'dashedAndSpacing' },
					style: {
						...theme.typography.overline,
						marginTop: theme.spacing(2.5),
						marginBottom: theme.spacing(2.5),
						color: theme.palette.text.disabled,
						'&::before, &::after': {
							borderTopStyle: 'dashed',
						},
					},
				},
				{
					props: { variant: 'dashed' },
					style: {
						borderStyle: 'dashed',
					},
				},
			],
		},
	}
}
