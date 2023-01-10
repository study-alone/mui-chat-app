import { Typography } from '@mui/material'
import { Box, Stack, useTheme } from '@mui/material'
import { MessageOptions } from '@components/Conversation/MessageOptions'

interface ReplyMessageProp {
	incoming?: boolean
	message?: string
	reply?: string
	disableOptions?: boolean
}

export const ReplyMessage: React.FC<ReplyMessageProp> = ({ incoming, message, reply, disableOptions }) => {
	const { palette } = useTheme()
	return (
		<Stack direction="row" justifyContent={incoming ? 'start' : 'end'}>
			<Box
				p={1.5}
				sx={{
					backgroundColor: incoming ? palette.background.default : palette.primary.main,
					borderRadius: 1.5,
					width: 'max-content',
				}}
			>
				<Stack spacing={2}>
					<Stack
						p={2}
						direction="column"
						spacing={3}
						alignItems="center"
						sx={{ backgroundColor: palette.background.paper, borderRadius: 1 }}
					>
						<Typography variant="body2" color={palette.text.primary}>
							{message}
						</Typography>
					</Stack>
					<Typography variant="body2" color={incoming ? palette.text.primary : '#fff'}>
						{reply}
					</Typography>
				</Stack>
			</Box>
			{!disableOptions && <MessageOptions />}
		</Stack>
	)
}
