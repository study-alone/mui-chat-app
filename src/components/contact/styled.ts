import { Box, styled } from '@mui/material'

export const ContactStyled = styled(Box)<{ open: boolean }>(({ theme, open }) => ({
	width: 320,
	height: '100vh',
	position: 'fixed',
	right: open ? 0 : -320,
	top: 0,
	zIndex: 30,
	backgroundColor: theme.palette.background.default,
	boxShadow: theme.shadows[10],
}))

export const HeaderStyled = styled(Box)(({ theme }) => ({
	boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
	width: '100%',
	backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.default,
}))

export const SharedMessagesStyled = styled(Box)(({ theme }) => ({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	backgroundColor: theme.palette.background.default,
}))
