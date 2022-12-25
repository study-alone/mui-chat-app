import { Link, Typography } from '@mui/material'
import { Box, Stack, useTheme } from '@mui/material'
import { MessageOptions } from '@components/Conversation/MessageOptions'

interface LinkMessageProps {
	incoming?: boolean
	preview?: string
	message?: string
	disableOptions?: boolean
}

export const LinkMessage: React.FC<LinkMessageProps> = ({ incoming, preview, message, disableOptions }) => {
	const { palette } = useTheme()
	return (
		<Stack direction="row" justifyContent={incoming ? 'start' : 'end'} alignItems="start">
			<Box
				p={1.5}
				sx={{
					backgroundColor: incoming ? palette.background.default : palette.primary.main,
					borderRadius: 1.5,
					width: 'max-content',
				}}>
				<Stack spacing={2}>
					<Stack
						p={2}
						spacing={3}
						alignItems="start"
						sx={{ backgroundColor: palette.background.paper, borderRadius: 1 }}>
						<img src={preview} alt={message} style={{ maxHeight: 210, borderRadius: '10px' }} />
						<Stack justifyContent="start">
							<Typography variant="subtitle2">Creating Slacky</Typography>
							<Typography
								variant="subtitle2"
								component={Link}
								sx={{ color: palette.primary.main }}
								href="https://www.youtube.com"
								target="_blank">
								www.youtube.com
							</Typography>
						</Stack>
						<Typography variant="body2" color={incoming ? palette.text.primary : '#fff'}>
							{message}
						</Typography>
					</Stack>
				</Stack>
			</Box>
			{!disableOptions && <MessageOptions />}
		</Stack>
	)
}
