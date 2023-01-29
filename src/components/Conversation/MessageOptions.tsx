import { Icon } from '@components/common'
import { Button, IconButton, Menu, MenuItem, Stack } from '@mui/material'
import { useCallback, useState } from 'react'
import { Message_options } from 'src/data'

export const MessageOptions: React.FC = () => {
	const [element, setElement] = useState<HTMLButtonElement | null>(null)
	const [selected, setSelected] = useState<string>()
	const open = Boolean(element)

	const handleClick: React.MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
		setElement(event.currentTarget)
	}, [])

	const handleClose: React.MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
		setElement(null)
	}, [])

	const handleSelect: React.MouseEventHandler<HTMLButtonElement> = useCallback(
		(event) => {
			const selected = event.currentTarget.dataset.value
			setSelected(selected)
			handleClose(event)
		},
		[handleClose],
	)

	return (
		<>
			<IconButton
				id="basic-button"
				aria-controls={open ? 'message-options' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				disableRipple
				onClick={handleClick}
			>
				<Icon.DotsThreeVertical size={20} />
			</IconButton>
			<Menu
				id="message-options"
				anchorEl={element}
				open={open}
				onClose={handleClose}
				MenuListProps={{ 'aria-labelledby': 'basic-button' }}
			>
				<Stack spacing={1} px={1}>
					{Message_options.map((item) => (
						<MenuItem
							key={`text-message-option-${item.title}`}
							data-value={item.title}
							disabled={item.title === selected}
							component={Button}
							onClick={handleSelect}
						>
							{item.title}
						</MenuItem>
					))}
				</Stack>
			</Menu>
		</>
	)
}
