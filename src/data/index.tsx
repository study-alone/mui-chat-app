import { faker } from '@faker-js/faker'
import { ChatCircleDots, Gear, GearSix, Phone, SignOut, User, Users } from 'phosphor-react'

const Profile_Menu = [
	{ title: 'Profile', Icon: User },
	{ title: 'Settings', Icon: Gear },
	{ title: 'SignOut', Icon: SignOut },
]

const Nav_Buttons = [
	{ index: 0, Icon: ChatCircleDots },
	{ index: 1, Icon: Users },
	{ index: 2, Icon: Phone },
]

const Nav_Setting = [
	{
		index: 3,
		icon: <GearSix />,
	},
]

const ChatList = [
	{
		id: 0,
		img: faker.image.avatar(),
		name: faker.name.firstName(),
		msg: faker.music.songName(),
		time: '9:36',
		unread: 0,
		pinned: true,
		online: true,
	},
	{
		id: 1,
		img: faker.image.avatar(),
		name: faker.name.firstName(),
		msg: faker.music.songName(),
		time: '12:02',
		unread: 2,
		pinned: true,
		online: false,
	},
	{
		id: 2,
		img: faker.image.avatar(),
		name: faker.name.firstName(),
		msg: faker.music.songName(),
		time: '10:35',
		unread: 3,
		pinned: false,
		online: true,
	},
	{
		id: 3,
		img: faker.image.avatar(),
		name: faker.name.firstName(),
		msg: faker.music.songName(),
		time: '04:00',
		unread: 0,
		pinned: false,
		online: true,
	},
	{
		id: 4,
		img: faker.image.avatar(),
		name: faker.name.firstName(),
		msg: faker.music.songName(),
		time: '08:42',
		unread: 0,
		pinned: false,
		online: false,
	},
	{
		id: 5,
		img: faker.image.avatar(),
		name: faker.name.firstName(),
		msg: faker.music.songName(),
		time: '08:42',
		unread: 0,
		pinned: false,
		online: false,
	},
	{
		id: 6,
		img: faker.image.avatar(),
		name: faker.name.firstName(),
		msg: faker.music.songName(),
		time: '08:42',
		unread: 0,
		pinned: false,
		online: false,
	},
	{
		id: 7,
		img: faker.image.avatar(),
		name: faker.name.firstName(),
		msg: faker.music.songName(),
		time: '08:42',
		unread: 0,
		pinned: false,
		online: false,
	},
]

type ChatHistoryForDividerType = {
	type: 'divider'
	text: string
}

type ChatHistoryTypeDefaultProps = {
	message: string
	incoming: boolean
	outgoing: boolean
}

interface ChatHistoryForTextType extends ChatHistoryTypeDefaultProps {
	type: 'msg'
	subtype: 'text'
}
interface ChatHistoryForDocumentType extends ChatHistoryTypeDefaultProps {
	type: 'msg'
	subtype: 'doc'
}

interface ChatHistoryForImageType extends ChatHistoryTypeDefaultProps {
	type: 'msg'
	subtype: 'img'
	img: string
}
interface ChatHistoryForLinkType extends ChatHistoryTypeDefaultProps {
	type: 'msg'
	subtype: 'link'
	preview: string
}
interface ChatHistoryForReplyType extends ChatHistoryTypeDefaultProps {
	type: 'msg'
	subtype: 'reply'
	reply: string
}

export type ChatHistoryListItem =
	| ChatHistoryForTextType
	| ChatHistoryForReplyType
	| ChatHistoryForDividerType
	| ChatHistoryForDocumentType
	| ChatHistoryForImageType
	| ChatHistoryForLinkType
const Chat_History: ChatHistoryListItem[] = [
	{
		type: 'msg',
		subtype: 'text',
		message: 'Hi 👋🏻, How are ya ?',
		incoming: true,
		outgoing: false,
	},
	{
		type: 'divider',
		text: 'Today',
	},
	{
		type: 'msg',
		subtype: 'text',
		message: 'Hi 👋 Panda, not bad, u ?',
		incoming: false,
		outgoing: true,
	},
	{
		type: 'msg',
		subtype: 'text',
		message: 'Can you send me an abstarct image?',
		incoming: false,
		outgoing: true,
	},
	{
		type: 'msg',
		subtype: 'text',
		message: 'Ya sure, sending you a pic',
		incoming: true,
		outgoing: false,
	},

	{
		type: 'msg',
		subtype: 'img',
		message: 'Here You Go',
		img: faker.image.abstract(),
		incoming: true,
		outgoing: false,
	},
	{
		type: 'msg',
		subtype: 'text',
		message: 'Can you please send this in file format?',
		incoming: false,
		outgoing: true,
	},

	{
		type: 'msg',
		subtype: 'doc',
		message: 'Yes sure, here you go.',
		incoming: true,
		outgoing: false,
	},
	{
		type: 'msg',
		subtype: 'link',
		preview: faker.image.cats(),
		message: 'Yep, I can also do that',
		incoming: true,
		outgoing: false,
	},
	{
		type: 'msg',
		subtype: 'reply',
		reply: 'This is a reply',
		message: 'Yep, I can also do that',
		incoming: false,
		outgoing: true,
	},
]

const Message_options = [
	{ title: 'Reply' },
	{ title: 'React to message' },
	{ title: 'Forward message' },
	{ title: 'Star message' },
	{ title: 'Report' },
	{ title: 'Delete Message' },
]

const SHARED_LINKS: ChatHistoryListItem[] = [
	{
		type: 'msg',
		subtype: 'link',
		preview: faker.image.cats(),
		message: 'Yep, Ican also do that',
		incoming: true,
		outgoing: false,
	},
	{
		type: 'msg',
		subtype: 'link',
		preview: faker.image.cats(),
		message: 'Yep, Ican also do that',
		incoming: true,
		outgoing: false,
	},
	{
		type: 'msg',
		subtype: 'link',
		preview: faker.image.cats(),
		message: 'Yep, Ican also do that',
		incoming: true,
		outgoing: false,
	},
	{
		type: 'msg',
		subtype: 'link',
		preview: faker.image.cats(),
		message: 'Yep, Ican also do that',
		incoming: true,
		outgoing: false,
	},
]
const SHARED_DOCS: ChatHistoryListItem[] = [
	{
		type: 'msg',
		subtype: 'doc',
		message: 'Yes sure, here you go',
		incoming: true,
		outgoing: false,
	},
	{
		type: 'msg',
		subtype: 'doc',
		message: 'Yes sure, here you go',
		incoming: true,
		outgoing: false,
	},
	{
		type: 'msg',
		subtype: 'doc',
		message: 'Yes sure, here you go',
		incoming: true,
		outgoing: false,
	},
	{
		type: 'msg',
		subtype: 'doc',
		message: 'Yes sure, here you go',
		incoming: true,
		outgoing: false,
	},
]

export { Profile_Menu, Nav_Setting, Nav_Buttons, ChatList, Chat_History, Message_options, SHARED_LINKS, SHARED_DOCS }
