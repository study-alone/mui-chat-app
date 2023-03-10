import { Box, Divider, IconButton, Link, Stack, styled, Typography } from '@mui/material'
import { ChatItem, SearchInput, SimpleBarStyle, Icon } from '@components/common'
import { ChatList } from 'src/data'
import { useCallback } from 'react'
import { useDialog } from '@lib/modal'
import { dialog } from '@components/dialog'

const Container = styled(Box)(({ theme }) => {
	const isLight = theme.palette.mode === 'light'
	return {
		display: 'flex',
		height: '100vh',
		backgroundColor: isLight ? '#f8faff' : theme.palette.background.default,
		width: 320,
		boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
	}
})

const PlusButton = styled(Icon.Plus)(({ theme }) => ({
	color: theme.palette.primary.main,
}))

const Group: React.FC = () => {
	const { openModal } = useDialog()

	const handleOpenCreateGroup = useCallback(() => {
		openModal(dialog.CreateGroup)
	}, [openModal])

	return (
		<Stack direction="row" sx={{ width: '100%' }}>
			{/* Left */}
			<Container>
				<Stack p={3} spacing={2} sx={{ maxHeight: '100vh' }}>
					<Stack>
						<Typography variant="h5">Groups</Typography>
					</Stack>
					<Stack sx={{ width: '100%' }}>
						<SearchInput placeholder="Search..." />
					</Stack>
					<Stack direction="row" justifyContent="space-between" alignItems="center">
						<Typography variant="subtitle2" component={Link}>
							Create New Group
						</Typography>
						<IconButton onClick={handleOpenCreateGroup}>
							<PlusButton />
						</IconButton>
					</Stack>
					<Divider />
					<Stack spacing={3} sx={{ flexGrow: 1, height: '100%' }}>
						<SimpleBarStyle timeout={500} clickOnTrack={false}>
							<Stack spacing={2.4}>
								<Typography variant="subtitle2" sx={{ color: '#676667' }}>
									Pinned
								</Typography>
								{/* Chat List */}
								<Stack>
									{ChatList.filter((item) => item.pinned).map((item) => (
										<ChatItem key={item.id} {...item} />
									))}
								</Stack>
							</Stack>
							<Stack spacing={2.4}>
								<Typography variant="subtitle2">All Grpups</Typography>
								{/* Chat List */}
								<Stack>
									{ChatList.filter((item) => !item.pinned).map((item) => (
										<ChatItem key={item.id} {...item} />
									))}
								</Stack>
							</Stack>
						</SimpleBarStyle>
					</Stack>
				</Stack>
			</Container>
			{/* Right */}
			{/* TODO: Reuse Conversation component */}
		</Stack>
	)
}

export default Group
