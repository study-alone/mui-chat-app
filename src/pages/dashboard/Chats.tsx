import React from 'react'
import { Box, IconButton, Stack, styled, Typography, Button, Divider } from '@mui/material'
import { ArchiveBox, CircleDashed } from 'phosphor-react'
import { ChatList } from 'src/data'
import { SimpleBarStyle, SearchInput, ChatItem } from '@components/common'

const ChatsStyled = styled(Box)(({ theme }) => ({
	position: 'relative',
	zIndex: 30,
	minHeight: '100%',
	width: 320,
	backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.default,
	boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
}))

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
					<SearchInput tabIndex={0} />
				</Stack>
				<Stack spacing={1}>
					<Stack direction="row" alignItems="center" spacing={1.5}>
						<ArchiveBox size={24} />
						<Button>Archive</Button>
					</Stack>
					<Divider />
				</Stack>
				<Stack direction="column" flexGrow={1} overflow="hidden" height="100%">
					<SimpleBarStyle timeout={500} clickOnTrack={false}>
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
