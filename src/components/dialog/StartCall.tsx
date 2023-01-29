import { Dialog, DialogContent, DialogTitle, Stack } from '@mui/material'
import { Transition } from '@components/dialog'
import { CallLog, SearchInput } from '@components/common'
import { membersList } from 'src/data'

interface StartCallProps {
	onClose(): void
}

const StartCall: React.FC<StartCallProps> = ({ onClose }) => {
	return (
		<Dialog
			open
			fullWidth
			maxWidth="xs"
			TransitionComponent={Transition}
			keepMounted
			sx={{ p: 4 }}
			onClose={onClose}
		>
			<DialogTitle sx={{ mb: 3 }}>Start Call</DialogTitle>
			<DialogContent>
				<Stack spacing={2}>
					<Stack sx={{ width: '100%' }}>
						<SearchInput />
					</Stack>
					<Stack spacing={1}>
						{membersList.map((item) => (
							<CallLog key={item.id} {...item} />
						))}
					</Stack>
				</Stack>
			</DialogContent>
		</Dialog>
	)
}

export default StartCall
