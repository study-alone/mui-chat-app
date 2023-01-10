import { Box, Stack, Typography, useTheme } from '@mui/material'
import { MessageOptions } from '@components/Conversation/MessageOptions'

interface TextMessageProps {
	message?: string
	incoming?: boolean
	disableOptions?: boolean
}

export const TextMessage: React.FC<TextMessageProps> = ({ message, incoming, disableOptions }) => {
	const { palette, shadows } = useTheme()
	return (
		<Stack direction="row" justifyContent={incoming ? 'start' : 'end'}>
			<Box
				p={1.5}
				sx={{
					backgroundColor: incoming ? palette.background.default : palette.primary.main,
					borderRadius: 1.5,
					width: 'max-content',
					boxShadow: shadows[5],
				}}
			>
				<Typography variant="body2" color={incoming ? palette.text.primary : '#fff'}>
					{message}
				</Typography>
			</Box>
			{!disableOptions && <MessageOptions />}
		</Stack>
	)
}
