import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Stack } from '@mui/material'
import { Transition } from '@components/dialog'
import { useCallback } from 'react'
import { Typography } from '@mui/material'

interface ShortcutsItem {
	id: number
	title: string
	combination: string[]
}
const shortcuts: ShortcutsItem[] = [
	{
		id: 0,
		title: 'Mark as unread',
		combination: ['Cmd', 'Shift', 'U'],
	},
	{
		id: 1,
		title: 'Mute',
		combination: ['Cmd', 'Shift', 'M'],
	},
	{
		id: 2,
		title: 'Archive Chat',
		combination: ['Cmd', 'Shift', 'E'],
	},
	{
		id: 3,
		title: 'Delete Chat',
		combination: ['Cmd', 'Shift', 'D'],
	},
	{
		id: 4,
		title: 'Pin Chat',
		combination: ['Cmd', 'Shift', 'P'],
	},
	{
		id: 5,
		title: 'Search',
		combination: ['Cmd', 'F'],
	},
	{
		id: 6,
		title: 'Search Chat',
		combination: ['Cmd', 'Shift', 'F'],
	},
	{
		id: 7,
		title: 'New Chat',
		combination: ['Cmd', 'N'],
	},
	{
		id: 8,
		title: 'Next Chat',
		combination: ['Ctrl', 'Tab'],
	},
	{
		id: 9,
		title: 'Previous Chat',
		combination: ['Ctrl', 'Shift', 'Tab'],
	},
	{
		id: 10,
		title: 'New Group',
		combination: ['Cmd', 'Shift', 'N'],
	},
	{
		id: 11,
		title: 'Profile & About',
		combination: ['Cmd', 'P'],
	},
	{
		id: 12,
		title: 'Increase speed of voice message',
		combination: ['Shift', '.'],
	},
	{
		id: 13,
		title: 'Decrease speed of voice message',
		combination: ['Shift', ','],
	},
	{
		id: 14,
		title: 'Settings',
		combination: ['Shift', '.'],
	},
	{
		id: 15,
		title: 'Emoji Panel',
		combination: ['Cmd', 'E'],
	},
	{
		id: 16,
		title: 'Settings',
		combination: ['Cmd', 'G'],
	},
	{
		id: 17,
		title: 'Sticker Panel',
		combination: ['Cmd', 'S'],
	},
]

interface ShorcutsProps {
	onClose?(): void
}
const Shortcuts: React.FC<ShorcutsProps> = ({ onClose }) => {
	const handleClose = useCallback(() => {
		typeof onClose === 'function' && onClose()
	}, [onClose])

	return (
		<Dialog
			open
			fullWidth
			maxWidth="md"
			onClose={handleClose}
			sx={{ p: 4 }}
			keepMounted
			TransitionComponent={Transition}
		>
			<DialogTitle>Keyboard Shortcuts</DialogTitle>
			<DialogContent sx={{ mt: 4 }}>
				<Grid container spacing={3}>
					{shortcuts.map(({ id, title, combination }) => (
						<Grid container item xs={6} key={id}>
							<Stack
								sx={{ width: '100%' }}
								justifyContent="space-between"
								spacing={3}
								direction="row"
								alignItems="center"
							>
								<Typography variant="caption" fontSize={14}>
									{title}
								</Typography>
								<Stack spacing={2} direction="row">
									{combination.map((item) => (
										<Button
											key={`shortcut-key-${title}-${item}`}
											disabled
											variant="contained"
											sx={{ color: '#212121' }}
										>
											{item}
										</Button>
									))}
								</Stack>
							</Stack>
						</Grid>
					))}
				</Grid>
			</DialogContent>
			<DialogActions>
				<Button variant="contained" onClick={handleClose}>
					Ok
				</Button>
			</DialogActions>
		</Dialog>
	)
}

export default Shortcuts
