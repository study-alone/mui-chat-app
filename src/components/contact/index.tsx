import { AntSwitch } from '@components/common'
import { faker } from '@faker-js/faker'
import { useContactToggle } from '@hooks/useContactToggle'
import { Avatar, Button, Divider, IconButton, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Bell, CaretRight, Phone, Prohibit, Star, Trash, VideoCamera, X } from 'phosphor-react'
import { useCallback } from 'react'
import { ContactStyled, HeaderStyled } from '@components/contact/styled'
import SharedMessages from '@components/contact/SharedMessages'
import StarredMessages from '@components/contact/StarredMessages'
import { useDialog } from '@lib/modal'
import { dialog } from '@components/dialog'

const userInfo = {
	avatar: faker.image.avatar(),
	name: faker.name.fullName(),
	photos: [
		{
			image: faker.image.business(),
			alt: faker.lorem.word(),
		},
		{
			image: faker.image.food(),
			alt: faker.lorem.word(),
		},
		{
			image: faker.image.cats(),
			alt: faker.lorem.word(),
		},
	],
	group: {
		avatar: { image: faker.image.avatar(), alt: faker.name.fullName() },
	},
}

export const Contact: React.FC = () => {
	const { open, toggle, setType } = useContactToggle()
	const { openModal } = useDialog()

	const handleClose = useCallback(() => {
		toggle()
	}, [toggle])

	const handleOpenShared = useCallback(() => {
		setType('shared')
	}, [setType])

	const handleOpenStarred = useCallback(() => {
		setType('starred')
	}, [setType])

	const handleOpenBlockDialog = useCallback(() => {
		openModal(dialog.Block)
	}, [openModal])

	const handleOpenDeleteDialog = useCallback(() => {
		openModal(dialog.Delete)
	}, [openModal])

	return (
		<ContactStyled open={open}>
			<Stack sx={{ height: '100%' }}>
				<HeaderStyled>
					<Stack
						direction="row"
						sx={{ height: '100%', p: 2 }}
						alignItems="center"
						justifyContent="space-between"
						spacing={3}
					>
						<Typography variant="subtitle2">Contact Info</Typography>
						<IconButton onClick={handleClose}>
							<X />
						</IconButton>
					</Stack>
				</HeaderStyled>
				<Stack
					sx={{ height: '100%', position: 'relative', flexGrow: 1, overflowY: 'scroll' }}
					p={3}
					spacing={3}
				>
					<Stack alignItems="center" direction="row" spacing={2}>
						<Avatar src={userInfo.avatar} alt={userInfo.name} sx={{ width: 64, height: 64 }} />
						<Stack spacing={0.5}>
							<Typography variant="article" fontWeight={600}>
								{userInfo.name}
							</Typography>
							<Typography variant="body2" fontWeight={500}>
								+91 729 2829 2992
							</Typography>
						</Stack>
					</Stack>
					<Stack direction="row" alignItems="center" justifyContent="space-evenly">
						<Stack spacing={1} alignItems="center">
							<IconButton>
								<Phone />
							</IconButton>
							<Typography variant="overline">Voice</Typography>
						</Stack>
						<Stack spacing={1} alignItems="center">
							<IconButton>
								<VideoCamera />
							</IconButton>
							<Typography variant="overline">Video</Typography>
						</Stack>
					</Stack>
					<Divider />
					<Stack spacing={0.5}>
						<Typography variant="article">About</Typography>
						<Typography variant="body2">Imagination is the only limit!</Typography>
					</Stack>
					<Divider />
					<Stack direction="row" alignItems="center" justifyContent="space-between">
						<Typography variant="subtitle2">Media, Links & Docs</Typography>
						<Button endIcon={<CaretRight />} onClick={handleOpenShared}>
							401
						</Button>
					</Stack>
					<Stack direction="row" spacing={2} alignItems="center">
						{userInfo.photos.map((item) => (
							<Box key={`contact-images-${item.alt}`}>
								<img src={item.image} alt={item.alt} />
							</Box>
						))}
					</Stack>
					<Divider />
					<Stack direction="row" alignItems="center" justifyContent="space-between">
						<Stack direction="row" alignItems="center" spacing={2}>
							<Star size={21} />
							<Typography variant="subtitle2">Starred Message</Typography>
						</Stack>
						<IconButton onClick={handleOpenStarred}>
							<CaretRight />
						</IconButton>
					</Stack>
					<Divider />
					<Stack direction="row" alignItems="center" justifyContent="space-between">
						<Stack direction="row" alignItems="center" spacing={2}>
							<Bell size={21} />
							<Typography variant="subtitle2">Mute Notification</Typography>
						</Stack>
						<AntSwitch />
					</Stack>
					<Divider />
					<Typography>1 group in common</Typography>
					<Stack direction="row" alignItems="center" spacing={2}>
						<Avatar src={userInfo.group.avatar.image} alt={userInfo.group.avatar.alt} />
						<Stack spacing={0.5}>
							<Typography variant="subtitle2">Comel`s Gang</Typography>
							<Typography variant="subtitle2">Owl, Parrot, Rabbit</Typography>
						</Stack>
					</Stack>
					<Stack direction="row" alignItems="center" spacing={2}>
						<Button startIcon={<Prohibit />} fullWidth variant="outlined" onClick={handleOpenBlockDialog}>
							Block
						</Button>
						<Button startIcon={<Trash />} fullWidth variant="outlined" onClick={handleOpenDeleteDialog}>
							Delete
						</Button>
					</Stack>
				</Stack>
			</Stack>
			<SharedMessages />
			<StarredMessages />
		</ContactStyled>
	)
}
