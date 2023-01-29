import { Box, inputBaseClasses, styled, TextField } from '@mui/material'

export const ConversationLayout = styled(Box)<{ type?: 'header' | 'footer' }>(
	({ theme, type = 'header' }) => ({
		height: 100,
		width: '100%',
		backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.paper,
		boxShadow: `0px 0px 5px 2px rgba(0, 0, 0, 0.25)`,
		position: 'relative',
		zIndex: 20,
	}),
)

export const InputStyled = styled(TextField)(({ theme }) => ({
	[`& .${inputBaseClasses.input}`]: {
		paddingTop: '12px',
		paddingBottom: '12px',
	},
}))

export const SendButtonStyled = styled(Box)(({ theme }) => ({
	height: 48,
	width: 48,
	backgroundColor: theme.palette.primary.main,
	borderRadius: 1.5 * 8,
}))
