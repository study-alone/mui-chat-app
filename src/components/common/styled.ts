import { styled, Badge, badgeClasses, Box } from '@mui/material'

export const BadgeStyled = styled(Badge)(({ theme }) => ({
	[`& .${badgeClasses.badge}`]: {
		backgroundColor: '#44b700',
		color: '#44b700',
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		'&:after': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			borderRadius: '50%',
			transformOrigin: '50% 50%',
			animation: 'ripple 1.2s infinite ease-in-out',
			border: '1px solid currentColor',
			content: '""',
		},
	},
	'@keyframes ripple': {
		'0%': {
			transform: 'scale(0.8)',
			opacity: '1,',
		},
		'100%': {
			transform: 'scale(2.4)',
			opacity: 0,
		},
	},
}))

export const ChatItemStyled = styled(Box)(({ theme }) => {
	const { palette, shadows } = theme
	const { mode, background } = palette

	return {
		width: '100%',
		borderRadius: 1 * 8,
		backgroundColor: mode === 'light' ? '#fff' : background.paper,
		boxShadow: shadows[5],
		padding: 16,
	}
})
