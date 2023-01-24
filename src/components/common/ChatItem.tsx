import { Avatar, Badge, Box, Stack, styled, Typography } from '@mui/material'
import { memo } from 'react'
import { BadgeStyled } from '@components/common'

const ChatItemStyled = styled(Box)(({ theme }) => ({
	width: '100%',
	borderRadius: 1 * 8,
	backgroundColor: theme.palette.mode === 'light' ? '#fff' : theme.palette.background.paper,
	boxShadow: theme.shadows[5],
}))

interface ChatItemProps {
	id: number
	img: string
	name: string
	msg: string
	time: string
	unread: number
	pinned: boolean
	online: boolean
}

export const ChatItem = memo<ChatItemProps>(({ id, img, name, msg, time, unread, pinned, online }) => {
	return (
		<Box sx={{ pb: 2 }}>
			<ChatItemStyled p={2}>
				<Stack direction="row" alignItems="center" justifyContent="space-between">
					<Stack direction="row" spacing={2}>
						{online ? (
							<BadgeStyled
								variant="dot"
								overlap="circular"
								anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
							>
								<Avatar src={img} />
							</BadgeStyled>
						) : (
							<Avatar src={img} />
						)}
						<Stack spacing={0.3}>
							<Typography variant="subtitle2">{name}</Typography>
							<Typography variant="caption">{msg}</Typography>
						</Stack>
					</Stack>
					<Stack spacing={2} alignItems="center">
						<Typography sx={{ fontWeight: 600 }} variant="caption">
							{time}
						</Typography>
						<Badge color="primary" badgeContent={unread} />
					</Stack>
				</Stack>
			</ChatItemStyled>
		</Box>
	)
})
ChatItem.displayName = 'ChatItem'
