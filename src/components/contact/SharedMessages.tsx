import { useCallback, useState } from 'react'
import { useContactToggle } from '@hooks/useContactToggle'
import { Grid, IconButton, Stack, Tab, Typography } from '@mui/material'
import { HeaderStyled, SharedMessagesStyled } from '@components/contact/styled'
import { Tabs } from '@mui/material'
import { faker } from '@faker-js/faker'
import { SHARED_DOCS, SHARED_LINKS } from 'src/data'
import { LinkMessage } from '@components/Conversation/LinkMessage'
import { DocumentMessage } from '@components/Conversation/DocumentMessage'
import { Icon } from '@components/common'

type TabValue = 'media' | 'link' | 'docs'

const medias = [
	{ src: faker.image.abstract(), alt: faker.name.fullName() },
	{ src: faker.image.animals(), alt: faker.name.fullName() },
	{ src: faker.image.business(), alt: faker.name.fullName() },
	{ src: faker.image.fashion(), alt: faker.name.fullName() },
	{ src: faker.image.cats(), alt: faker.name.fullName() },
	{ src: faker.image.city(), alt: faker.name.fullName() },
]

const SharedMessages: React.FC = () => {
	const { type, setType } = useContactToggle()
	const [tabValue, setTabValue] = useState<TabValue>('media')

	const handleBackward = useCallback(() => {
		setType(`own`)
	}, [setType])

	const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: TabValue) => {
		setTabValue(newValue)
	}, [])

	if (type !== 'shared') return null
	return (
		<SharedMessagesStyled display="flex" flexDirection="column">
			<HeaderStyled>
				<Stack direction="row" sx={{ height: '100%', p: 2 }} alignItems="center" spacing={3}>
					<IconButton onClick={handleBackward}>
						<Icon.CaretLeft />
					</IconButton>
					<Typography variant="subtitle2">Shared Message</Typography>
				</Stack>
			</HeaderStyled>
			<Tabs value={tabValue} onChange={handleChangeTab} sx={{ px: 2, pt: 2, flexShrink: 0 }} centered>
				<Tab label="Media" value="media" />
				<Tab label="Link" value="link" />
				<Tab label="Docs" value="docs" />
			</Tabs>
			<Stack
				sx={{ position: 'relative', flexGrow: 1, flexShrink: 1, overflowY: 'scroll' }}
				p={3}
				spacing={3}
			>
				{tabValue === 'media' && (
					<Grid container spacing={2}>
						{medias.map((item) => (
							<Grid item xs={4} key={`shared-medias-${item.alt}`}>
								<img src={item.src} alt={item.alt} />
							</Grid>
						))}
					</Grid>
				)}
				{tabValue === 'link' &&
					SHARED_LINKS.map((item, index) => (
						<LinkMessage {...item} key={`shared-message-link-${index}`} />
					))}
				{tabValue === 'docs' &&
					SHARED_DOCS.map((item, index) => (
						<DocumentMessage {...item} key={`shared-message-document-${index}`} />
					))}
			</Stack>
		</SharedMessagesStyled>
	)
}

export default SharedMessages
