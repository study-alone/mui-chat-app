import { styled, Box } from '@mui/material'

export const SideNavigationStyled = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
	height: '100vh',
	width: 100,
}))

export const LogoStyled = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	height: 64,
	width: 64,
	borderRadius: 1.5 * 8,
}))

export const IconButtonStyled = styled(Box, {
	shouldForwardProp: (propName) => propName !== 'isActive',
})<{ isActive: boolean }>(({ theme, isActive }) => {
	const iconColor = theme.palette.mode === 'light' ? '#000' : theme.palette.text.primary
	const activeBackground = theme.palette.primary.main
	return {
		backgroundColor: isActive ? activeBackground : 'transparent',
		borderRadius: 1.5 * 8,
		'.icon-button': {
			width: 'max-content',
			color: isActive ? '#fff' : iconColor,
		},
	}
})
