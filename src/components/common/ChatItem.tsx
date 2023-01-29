import { Avatar, Badge, Box, Stack, Typography } from '@mui/material'
import { memo } from 'react'
import { BadgeStyled, ChatItemStyled, OptionalWrapper } from '@components/common'

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
			<ChatItemStyled>
				<Stack direction="row" alignItems="center" justifyContent="space-between">
					<Stack direction="row" spacing={2}>
						<OptionalWrapper
							condition={online}
							component={BadgeStyled}
							variant="dot"
							overlap="circular"
							anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
						>
							<Avatar src={img} />
						</OptionalWrapper>
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
