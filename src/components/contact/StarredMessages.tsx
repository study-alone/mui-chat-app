import { useCallback, useState } from 'react'
import { useContactToggle } from '@hooks/useContactToggle'
import { Box, Grid, IconButton, Stack, Tab, Typography } from '@mui/material'
import { HeaderStyled, SharedMessagesStyled } from '@components/contact/styled'
import { CaretLeft, X } from 'phosphor-react'
import { Tabs } from '@mui/material'
import { faker } from '@faker-js/faker'
import { SHARED_DOCS, SHARED_LINKS } from 'src/data'
import { LinkMessage } from '@components/Conversation/LinkMessage'
import { DocumentMessage } from '@components/Conversation/DocumentMessage'
import { MessageWindow } from '@components/Conversation/MessageWindow'

const medias = [
	{ src: faker.image.abstract(), alt: faker.name.fullName() },
	{ src: faker.image.animals(), alt: faker.name.fullName() },
	{ src: faker.image.business(), alt: faker.name.fullName() },
	{ src: faker.image.fashion(), alt: faker.name.fullName() },
	{ src: faker.image.cats(), alt: faker.name.fullName() },
	{ src: faker.image.city(), alt: faker.name.fullName() },
]

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
						<CaretLeft />
					</IconButton>
					<Typography variant="subtitle2">Starred Message</Typography>
				</Stack>
			</HeaderStyled>
			<Stack sx={{ position: 'relative', flexGrow: 1, flexShrink: 1, overflowY: 'scroll' }} p={3} spacing={3}>
				<MessageWindow disableOptions />
			</Stack>
		</SharedMessagesStyled>
	)
}

export default StarredMessages
