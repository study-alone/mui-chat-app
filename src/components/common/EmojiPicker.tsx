import { useCallback } from 'react'
import { useTheme } from '@mui/material'
import Picker from '@emoji-mart/react'
import emojiData from '@emoji-mart/data'

interface EmojiPickerProps {
	onSelect(emoji: string): void
	onClickOutside(): void
	autoFocus?: boolean
	open: boolean
}

export const EmojiPicker: React.FC<EmojiPickerProps> = ({
	onSelect,
	onClickOutside = () => {
		/** nothing */
	},
	autoFocus = false,
	open,
}) => {
	const theme = useTheme()

	const handleEmojiSelect = useCallback(
		(emoji: string) => {
			onSelect(emoji)
		},
		[onSelect],
	)

	const handleClickOutside = useCallback(() => {
		open && onClickOutside()
	}, [onClickOutside, open])

	return (
		<Picker
			theme={theme.palette.mode}
			data={emojiData}
			onEmojiSelect={handleEmojiSelect}
			autoFocus={autoFocus}
			onClickOutside={handleClickOutside}
		/>
	)
}
