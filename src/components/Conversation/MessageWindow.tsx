import { Box, Stack } from '@mui/material'
import { Chat_History } from 'src/data'
import { Timeline } from '@components/Conversation/Timeline'
import { TextMessage } from '@components/Conversation/TextMessage'
import { MediaMessage } from '@components/Conversation/MediaMessage'
import { ReplyMessage } from '@components/Conversation/ReplyMessage'
import { LinkMessage } from '@components/Conversation/LinkMessage'
import { DocumentMessage } from '@components/Conversation/DocumentMessage'
import { SimpleBarStyle } from '@components/common'
import { useCallback } from 'react'
import { omit } from 'lodash-es'

import type { ChatHistoryListItem } from 'src/data'

export const MessageWindow: React.FC<{ disableOptions?: boolean }> = ({ disableOptions }) => {
	const messageTypeByComponent = useCallback((item: ChatHistoryListItem) => {
		const components = {
			img: MediaMessage,
			doc: DocumentMessage,
			link: LinkMessage,
			reply: ReplyMessage,
			text: TextMessage,
		}
		const Component = item.type === 'msg' ? components[item.subtype] : Timeline
		const props = omit(item, ['type', 'subtype'])

		return { Component, props }
	}, [])
	return (
		<SimpleBarStyle timeout={500} clickOnTrack={false} sx={{ height: '100%' }}>
			<Box p={3}>
				<Stack spacing={3}>
					{Chat_History.map((item, index) => {
						const { Component, props } = messageTypeByComponent(item)
						return (
							<Component
								key={`chat-history-for-message-type-${index}`}
								{...props}
								disableOptions={disableOptions}
							/>
						)
					})}
				</Stack>
			</Box>
		</SimpleBarStyle>
	)
}
