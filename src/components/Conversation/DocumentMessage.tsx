import { Box, IconButton, Stack, Typography, useTheme } from '@mui/material'
import { DownloadSimple, Image } from 'phosphor-react'
import { MessageOptions } from '@components/Conversation/MessageOptions'

interface DocumentMessageProps {
	incoming?: boolean
	message?: string
	disableOptions?: boolean
}

export const DocumentMessage: React.FC<DocumentMessageProps> = ({ incoming, message, disableOptions }) => {
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
						direction="row"
						spacing={3}
						alignItems="center"
						sx={{
							backgroundColor: palette.background.paper,
							borderRadius: 1,
						}}
					>
						<Image size={48} />
						<Typography variant="caption">Abstract.png</Typography>
						<IconButton>
							<DownloadSimple />
						</IconButton>
					</Stack>
					<Typography variant="body2" sx={{ color: incoming ? palette.text.primary : '#fff' }}>
						{message}
					</Typography>
				</Stack>
			</Box>
			{!disableOptions && <MessageOptions />}
		</Stack>
	)
}
