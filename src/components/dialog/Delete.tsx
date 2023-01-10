import { useCallback } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { Transition } from '@components/dialog'

interface DeleteProps {
	onClose?(): void
}

const Delete: React.FC<DeleteProps> = ({ onClose }) => {
	const handleClose = useCallback(() => {
		typeof onClose === 'function' && onClose()
	}, [onClose])

	return (
		<Dialog
			open={true}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			aria-describedby="alert-dialog-slide-description"
		>
			<DialogTitle>Delete this chat</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-slide-description">
					Are you sure you want to Delete this Contact?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Disagree</Button>
				<Button onClick={handleClose}>Agree</Button>
			</DialogActions>
		</Dialog>
	)
}

export default Delete
