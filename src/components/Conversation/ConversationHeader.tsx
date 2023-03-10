import { BadgeStyled, Icon } from '@components/common'
import { useContactToggle } from '@hooks/useContactToggle'
import { Avatar, Box, Divider, IconButton, Stack, Typography } from '@mui/material'
import { ConversationLayout } from './styled'

interface ConversationHeaderProps {
	fullName: string
	avatar: string
}

export const ConversationHeader: React.FC<ConversationHeaderProps> = ({ fullName, avatar }) => {
	const { toggle } = useContactToggle()

	return (
		<ConversationLayout p={2}>
			<Stack
				alignItems="center"
				direction="row"
				justifyContent="space-between"
				sx={{ width: '100%', height: '100%' }}
			>
				<Stack direction="row" spacing={2} onClick={toggle}>
					<Box>
						<BadgeStyled
							overlap="circular"
							variant="dot"
							anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
						>
							<Avatar alt={fullName} src={avatar} />
						</BadgeStyled>
					</Box>
					<Stack spacing={0.2}>
						<Typography variant="subtitle2">{fullName}</Typography>
						<Typography variant="caption">Online</Typography>
					</Stack>
				</Stack>
				<Stack direction="row" alignItems="center" spacing={3}>
					<IconButton>
						<Icon.VideoCamera />
					</IconButton>
					<IconButton>
						<Icon.Phone />
					</IconButton>
					<IconButton>
						<Icon.MagnifyingGlass />
					</IconButton>
					<Divider orientation="vertical" flexItem />
					<IconButton>
						<Icon.CaretDown />
					</IconButton>
				</Stack>
			</Stack>
		</ConversationLayout>
	)
}
