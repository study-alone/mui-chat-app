import { useCallback } from 'react'
import { useContactToggle } from '@hooks/useContactToggle'
import { IconButton, Stack, Typography } from '@mui/material'
import { HeaderStyled, SharedMessagesStyled } from '@components/contact/styled'
import { MessageWindow } from '@components/Conversation/MessageWindow'
import { Icon } from '@components/common'

const StarredMessages: React.FC = () => {
	const { type, setType } = useContactToggle()

	const handleBackward = useCallback(() => {
		setType(`own`)
	}, [setType])

	if (type !== 'starred') return null
	return (
		<SharedMessagesStyled display="flex" flexDirection="column">
			<HeaderStyled>
				<Stack direction="row" sx={{ height: '100%', p: 2 }} alignItems="center" spacing={3}>
					<IconButton onClick={handleBackward}>
						<Icon.CaretLeft />
					</IconButton>
					<Typography variant="subtitle2">Starred Message</Typography>
				</Stack>
			</HeaderStyled>
			<Stack
				sx={{ position: 'relative', flexGrow: 1, flexShrink: 1, overflowY: 'scroll' }}
				p={3}
				spacing={3}
			>
				<MessageWindow disableOptions />
			</Stack>
		</SharedMessagesStyled>
	)
}

export default StarredMessages
