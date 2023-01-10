import { useCallback, useState } from 'react'
import { Box, Fab, IconButton, Stack, Tooltip } from '@mui/material'
import { LinkSimple, PaperPlaneTilt, Smiley, Sticker, Image, Camera, File, User } from 'phosphor-react'
import { ConversationLayout, InputStyled, SendButtonStyled } from '@components/Conversation/styled'
import { EmojiPicker } from '@components/common'

const Actions = [
	{
		color: '#4da5fe',
		Icon: Image,
		title: 'Photo/Video',
	},
	{
		color: '#1b8cfe',
		Icon: Sticker,
		title: 'Stickers',
	},
	{
		color: '#0172e4',
		Icon: Camera,
		title: 'Image',
	},
	{
		color: '#0159b2',
		Icon: File,
		title: 'Document',
	},
	{
		color: '#013f7f',
		Icon: User,
		title: 'Contact',
	},
]

const ChatInput: React.FC = () => {
	const [emojiOpen, setEmojiOpen] = useState(false)
	const [actionsOpen, setActionsOpen] = useState(false)

	const handleClickEmoji = useCallback(() => {
		setEmojiOpen((emojiOpen) => !emojiOpen)
	}, [])

	const handleCloseEmojiPicker = useCallback(() => {
		setEmojiOpen(false)
	}, [])

	const handleClickActionsOpen = useCallback(() => {
		setActionsOpen((actionsOpen) => !actionsOpen)
	}, [])

	return (
		<InputStyled
			fullWidth
			placeholder="Write a message..."
			variant="filled"
			InputProps={{
				disableUnderline: true,
				startAdornment: (
					<Stack sx={{ width: 'max-content', position: 'relative' }}>
						<Stack sx={{ position: 'absolute', bottom: 60, display: actionsOpen ? 'block' : 'none' }}>
							{Actions.map((item, index) => (
								<Tooltip title={item.title} placement="right" key={`link-action-list-${item.title}`}>
									<Fab sx={{ backgroundColor: item.color, marginBottom: '16px' }}>
										<item.Icon size={24} />
									</Fab>
								</Tooltip>
							))}
						</Stack>
						<IconButton onClick={handleClickActionsOpen}>
							<LinkSimple />
						</IconButton>
					</Stack>
				),
				endAdornment: (
					<Stack>
						<Box
							sx={{
								display: emojiOpen ? 'block' : 'none',
							}}
						>
							<EmojiPicker
								onSelect={console.log}
								open={emojiOpen}
								onClickOutside={handleCloseEmojiPicker}
							/>
						</Box>
						<IconButton onClick={handleClickEmoji}>
							<Smiley />
						</IconButton>
					</Stack>
				),
			}}
		/>
	)
}

export const ConversationFooter: React.FC = () => {
	return (
		<ConversationLayout p={2}>
			<Stack direction="row" alignItems="center" spacing={3} sx={{ width: '100%' }}>
				<ChatInput />
				<SendButtonStyled>
					<Stack sx={{ height: '100%', width: '100%' }} alignItems="center" justifyContent="center">
						<IconButton>
							<PaperPlaneTilt color="#fff" />
						</IconButton>
					</Stack>
				</SendButtonStyled>
			</Stack>
		</ConversationLayout>
	)
}
