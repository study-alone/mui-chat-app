import { Stack } from '@mui/material'
import Chats from '@pages/dashboard/Chats'
import Conversation from '@components/Conversation'
import { Contact } from '@components/contact'

const GeneralApp: React.FC = () => {
	return (
		<Stack direction="row" sx={{ width: '100%' }}>
			<Chats />
			<Conversation />
			<Contact />
		</Stack>
	)
}

export default GeneralApp
