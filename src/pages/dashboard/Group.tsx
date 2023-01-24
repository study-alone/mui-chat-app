import { Box, Divider, IconButton, Link, Stack, styled, Typography } from '@mui/material'
import { ChatItem, SearchInput, SimpleBarStyle } from '@components/common'
import { Plus } from 'phosphor-react'
import { ChatList } from 'src/data'

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

const PlusButton = styled(Plus)(({ theme }) => ({
	color: theme.palette.primary.main,
}))

const Group: React.FC = () => {
	return (
		<Stack direction="row" sx={{ width: '100%' }}>
			{/* Left */}
			<Container>
				<Stack p={3} spacing={2} sx={{ maxHeight: '100vh' }}>
					<Stack>
						<Typography variant="h5">Groups</Typography>
					</Stack>
					<Stack sx={{ width: '100%' }}>
						<SearchInput tabIndex={0} placeholder="Search..." />
					</Stack>
					<Stack direction="row" justifyContent="space-between" alignItems="center">
						<Typography variant="subtitle2" component={Link}>
							Create New Group
						</Typography>
						<IconButton>
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
								{ChatList.filter((item) => item.pinned).map((item) => (
									<ChatItem key={item.id} {...item} />
								))}
							</Stack>
							<Stack spacing={2.4}>
								<Typography variant="subtitle2">All Grpups</Typography>
								{/* Chat List */}
								{ChatList.filter((item) => !item.pinned).map((item) => (
									<ChatItem key={item.id} {...item} />
								))}
							</Stack>
						</SimpleBarStyle>
					</Stack>
				</Stack>
			</Container>
			{/* Right */}
		</Stack>
	)
}

export default Group
