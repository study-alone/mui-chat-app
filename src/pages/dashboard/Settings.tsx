import { useCallback, useMemo } from 'react'
import { faker } from '@faker-js/faker'
import { Avatar, Box, Divider, IconButton, Stack, Typography, useTheme } from '@mui/material'
import { Bell, CaretLeft, Image, Info, Key, Keyboard, Lock, Note, PencilCircle } from 'phosphor-react'
import { useDialog } from '@lib/modal'
import { dialog } from '@components/dialog'

const Settings: React.FC = () => {
	const theme = useTheme()
	const { openModal } = useDialog()

	const handleOpenTheme = useCallback(() => {
		/** nothing */
	}, [])
	const handleOpenShortcuts = useCallback(() => {
		openModal(dialog.Shortcuts)
	}, [openModal])

	const options = useMemo(() => {
		return [
			{
				id: 0,
				Icon: Bell,
				title: 'Notifications',
				onClick: () => {
					/** nothing */
				},
			},
			{
				id: 1,
				Icon: Lock,
				title: 'Privacy',
				onClick: () => {
					/** nothing */
				},
			},
			{
				id: 2,
				Icon: Key,
				title: 'Security',
				onClick: () => {
					/** nothing */
				},
			},
			{
				id: 3,
				Icon: PencilCircle,
				title: 'Theme',
				onClick: handleOpenTheme,
			},
			{
				id: 4,
				Icon: Image,
				title: 'Chat Wallpaper',
				onClick: () => {
					/** nothing */
				},
			},
			{
				id: 5,
				Icon: Note,
				title: 'Request Account Info',
				onClick: () => {
					/** nothing */
				},
			},
			{
				id: 6,
				Icon: Keyboard,
				title: 'Keyboard Shortcuts',
				onClick: handleOpenShortcuts,
			},
			{
				id: 7,
				Icon: Info,
				title: 'Help',
				onClick: () => {
					/** nothing */
				},
			},
		]
	}, [handleOpenShortcuts, handleOpenTheme])

	return (
		<Stack direction="row" sx={{ width: '100%' }}>
			{/* LeftPannel */}
			<Box
				sx={{
					overflowY: 'scroll',
					height: '100vh',
					width: 320,
					backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.default,
					boxShadow: theme.shadows[10],
				}}
			>
				<Stack p={4} spacing={5}>
					{/* Header */}
					<Stack direction="row" alignItems="center" spacing={3}>
						<IconButton>
							<CaretLeft size={24} color="#4b4b4b" />
						</IconButton>
						<Typography variant="h6">Settings</Typography>
					</Stack>
					{/* Profile */}
					<Stack direction="row" spacing={3}>
						<Avatar
							sx={{ width: 56, height: 56 }}
							src={faker.image.avatar()}
							alt={faker.name.firstName()}
						/>
						<Stack spacing={0.5}>
							<Typography variant="article">{faker.name.firstName()}</Typography>
							<Typography variant="body2">{faker.random.words()}</Typography>
						</Stack>
					</Stack>
					{/* List of options */}
					<Stack spacing={4}>
						{options.map(({ id, Icon, title, onClick }) => (
							<>
								<Stack sx={{ cursor: 'pointer' }} spacing={2} onClick={onClick}>
									<Stack direction="row" spacing={2} alignItems="center">
										<Icon size={20} />
										<Typography variant="body2">{title}</Typography>
									</Stack>
									{id !== options.length - 1 && <Divider />}
								</Stack>
							</>
						))}
					</Stack>
				</Stack>
			</Box>
			{/* RightPannel */}
		</Stack>
	)
}

export default Settings
