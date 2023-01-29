import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material'
import { ChatItemStyled, Icon } from '@components/common'
import { memo, useMemo } from 'react'
import { isUndefined } from 'lodash-es'

type CallLogProps = {
	incoming?: boolean
	missed?: boolean
	name: string
	img: string
	type?: 'log' | 'member'
}

export const CallLog = memo<CallLogProps>(({ incoming, missed, name, img, type = 'log' }) => {
	const ArrowIcon = useMemo(() => {
		const color = missed ? 'red' : 'green'
		const icon = incoming ? Icon.ArrowDownLeft : Icon.ArrowUpRight
		return {
			Icon: icon,
			color,
		}
	}, [incoming, missed])

	return (
		<Box sx={{ pb: 2 }}>
			<ChatItemStyled>
				<Stack direction="row" alignItems="center" justifyContent="space-between">
					<Stack direction="row" alignItems="center" spacing={2}>
						<Avatar src={img} alt={name} />
						<Stack spacing={0.3}>
							<Typography variant="subtitle2">{name}</Typography>
							{/* <Typography variant="caption">{}</Typography> */}
							{!isUndefined(incoming) && !isUndefined(missed) && (
								<Stack direction="row" alignItems="center" spacing={1}>
									<ArrowIcon.Icon color={ArrowIcon.color} />
									<Typography variant="caption">Yesterday 21:24</Typography>
								</Stack>
							)}
						</Stack>
					</Stack>
					<Stack direction="row">
						<IconButton>
							<Icon.Phone color="lime" />
						</IconButton>
						<IconButton>
							<Icon.VideoCamera color="lime" />
						</IconButton>
					</Stack>
				</Stack>
			</ChatItemStyled>
		</Box>
	)
})
CallLog.displayName = 'CallLogo'
