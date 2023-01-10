import React, { memo } from 'react'
import {
	alpha,
	Box,
	IconButton,
	InputBase,
	Stack,
	styled,
	Typography,
	inputBaseClasses,
	Button,
	Divider,
	Avatar,
	Badge,
} from '@mui/material'
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react'
import { ChatList } from 'src/data'
import { SimpleBarStyle, BadgeStyled } from '@components/common'

const SearchStyled = styled(Box)(({ theme }) => ({
	position: 'relative',
	borderRadius: 20,
	backgroundColor: alpha(theme.palette.background.paper, 1),
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	boxShadow: theme.shadows[0],
	transition: 'box-shadow 0.2s ease-in',
	'&:focus-within': {
		boxShadow: theme.shadows[5],
	},
}))

const SearchIconWrapper = styled(Box)(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}))

const InputBaseStyled = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	[`& .${inputBaseClasses.input}`]: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		width: '100%',
	},
}))

const ChatsStyled = styled(Box)(({ theme }) => ({
	position: 'relative',
	zIndex: 30,
	minHeight: '100%',
	width: 320,
	backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.default,
	boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
}))

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

const ChatItem = memo<ChatItemProps>(({ id, img, name, msg, time, unread, pinned, online }) => {
	return (
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
	)
})
ChatItem.displayName = 'ChatItem'

interface ChatsProps {
	/** nothing */
	nothing?: boolean
}

const Chats: React.FC<ChatsProps> = () => {
	return (
		<ChatsStyled>
			<Stack p={3} spacing={2} sx={{ height: '100vh' }}>
				<Stack direction="row" alignItems="center" justifyContent="space-between">
					<Typography variant="h5">Chats</Typography>
					<IconButton>
						<CircleDashed />
					</IconButton>
				</Stack>
				<Stack sx={{ width: '100%' }}>
					<SearchStyled tabIndex={0}>
						<SearchIconWrapper>
							<MagnifyingGlass color="#709CE6" />
						</SearchIconWrapper>
						<InputBaseStyled placeholder="Search..." inputProps={{ 'aria-label': 'search' }} />
					</SearchStyled>
				</Stack>
				<Stack spacing={1}>
					<Stack direction="row" alignItems="center" spacing={1.5}>
						<ArchiveBox size={24} />
						<Button>Archive</Button>
					</Stack>
					<Divider />
				</Stack>
				<Stack direction="column" flexGrow={1} overflow="hidden" height="100%">
					<SimpleBarStyle timeout={500} clickOnTrack={false} sx={{ height: '100%' }}>
						<Stack spacing={2.4}>
							<Typography variant="subtitle2" sx={{ color: '#676767' }}>
								Pinned
							</Typography>
							{ChatList.filter((item) => item.pinned).map((item, index) => (
								<ChatItem {...item} key={`pinned-chat-item-${index}`} />
							))}
						</Stack>
						<Stack spacing={2.4} my={4}>
							<Typography variant="subtitle2" sx={{ color: '#676767' }}>
								All Chats
							</Typography>
							{ChatList.filter((item) => !item.pinned).map((item, index) => (
								<ChatItem {...item} key={`pinned-chat-item-${index}`} />
							))}
						</Stack>
					</SimpleBarStyle>
				</Stack>
			</Stack>
		</ChatsStyled>
	)
}

export default Chats
