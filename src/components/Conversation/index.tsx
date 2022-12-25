import { Box, Stack, styled } from '@mui/material'
import { ConversationHeader } from './ConversationHeader'
import { ConversationFooter } from './ConversationFooter'
import { MessageWindow } from '@components/Conversation/MessageWindow'
import { faker } from '@faker-js/faker'

const ConversationWrapper = styled(Box)(({ theme }) => ({
	height: '100%',
	width: 'auto',
	backgroundColor: theme.palette.mode === 'light' ? '#f0f4fa' : theme.palette.background.paper,
}))

// conversation partner
const chatUser = {
	fullName: faker.name.fullName(),
	avatar: faker.image.avatar(),
}

const Conversation: React.FC = () => {
	return (
		<ConversationWrapper flexGrow={1}>
			<Stack height="100%" maxHeight="100vh" width="auto">
				{/* <ChatHeader /> */}
				<ConversationHeader {...chatUser} />
				{/** msg */}
				<Box sx={{ width: '100%', flexGrow: 1 }}>
					<MessageWindow />
				</Box>
				{/* <ChatFooter /> */}
				<ConversationFooter />
			</Stack>
		</ConversationWrapper>
	)
}

export default Conversation
