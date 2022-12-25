import { Divider, Stack, Typography, useTheme } from '@mui/material'

interface TimelineProps {
	text?: string
}

export const Timeline: React.FC<TimelineProps> = ({ text }) => {
	const { palette } = useTheme()

	return (
		<Stack direction="row" alignItems="center" justifyContent="space-between">
			<Divider sx={{ width: '100%' }}>
				<Typography sx={{ color: palette.text.primary }} variant="caption">
					{text}
				</Typography>
			</Divider>
		</Stack>
	)
}
