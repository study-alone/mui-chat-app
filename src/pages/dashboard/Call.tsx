import { Box, styled, Stack, Typography, IconButton, Divider, Link } from '@mui/material'
import { CallLog, SearchInput, SimpleBarStyle, Icon } from '@components/common'
import { CallList } from 'src/data'
import { useDialog } from '@lib/modal'
import { useCallback } from 'react'
import { dialog } from '@components/dialog'

const Container = styled(Box)(({ theme }) => {
	const isLight = theme.palette.mode === 'light'
	return {
		display: 'flex',
		height: '100vh',
		backgroundColor: isLight ? '#f8faff' : theme.palette.background.default,
		width: 340,
		boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
	}
})

const PlusButton = styled(Icon.Plus)(({ theme }) => ({
	color: theme.palette.primary.main,
}))

const Call: React.FC = () => {
	const { openModal } = useDialog()

	const openStartCall = useCallback(() => {
		openModal(dialog.StartCall, {})
	}, [openModal])

	return (
		<Stack direction="row" sx={{ width: '100%' }}>
			{/* Left */}
			<Container>
				<Stack p={3} spacing={2} sx={{ maxHeight: '100vh', width: '100%' }}>
					<Stack>
						<Typography variant="h5">Call Logs</Typography>
					</Stack>
					<Stack sx={{ width: '100%' }}>
						<SearchInput placeholder="Search..." />
					</Stack>
					<Stack direction="row" justifyContent="space-between" alignItems="center">
						<Typography variant="subtitle2" component={Link}>
							Start Call
						</Typography>
						<IconButton onClick={openStartCall}>
							<PlusButton />
						</IconButton>
					</Stack>
					<Divider />
					<Stack spacing={3} sx={{ flexGrow: 1, height: '100%' }}>
						<SimpleBarStyle timeout={500} clickOnTrack={false}>
							<Stack>
								{/* Call logs */}
								{CallList.map((item) => (
									<CallLog key={item.id} {...item} />
								))}
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

export default Call
