import { useCallback, useState } from 'react'
import { Avatar, Divider, IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material'
import { AntSwitch } from '@components/common'
import { SideNavigationStyled, LogoStyled } from '@layouts/dashboard/index.styled'
import { NavButton } from '@layouts/dashboard/NavButton'
import useSettings from '@hooks/useSettings'
import Logo from '@assets/Images/logo.ico'
import { Gear } from 'phosphor-react'
import { Nav_Buttons, Profile_Menu } from 'src/data'
import { faker } from '@faker-js/faker'

const avatarImage = faker.image.avatar()

export const SideNavigation: React.FC = () => {
	const { onToggleMode } = useSettings()
	const [selected, setSelected] = useState(0)
	const [element, setElement] = useState<HTMLButtonElement | null>(null)
	const [selectedProfileMenu, setSelectedProfileMenu] = useState('')
	const profileMenuOpen = Boolean(element)

	const handleCloseProfileMenu = useCallback(() => {
		setElement(null)
	}, [])

	const handleOpenProfileMenu: React.MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
		setElement(event.currentTarget)
	}, [])

	const handleSelectProfileMenu: React.MouseEventHandler<HTMLButtonElement> = useCallback(
		(event) => {
			setSelectedProfileMenu(event.currentTarget.dataset.value || '')
			handleCloseProfileMenu()
		},
		[handleCloseProfileMenu],
	)

	return (
		<SideNavigationStyled>
			<Stack
				direction="column"
				alignItems="center"
				justifyContent="space-between"
				spacing={3}
				py={3}
				width="100%"
				height="100%">
				<Stack alignItems="center" spacing={4}>
					<LogoStyled>
						<img src={Logo} alt="Chat App Logo" />
					</LogoStyled>
					<Stack spacing={3} width="max-content" direction="column" alignItems="center">
						{Nav_Buttons.map(({ Icon, index }) => (
							<NavButton
								isActive={index === selected}
								onClick={setSelected}
								index={index}
								key={`nav-button-${index}`}>
								<Icon />
							</NavButton>
						))}
						<Divider sx={{ width: '48px' }} />
						<NavButton isActive={selected === 3} onClick={setSelected} index={3}>
							<Gear />
						</NavButton>
					</Stack>
				</Stack>
				<Stack spacing={4}>
					<AntSwitch defaultChecked onChange={onToggleMode} />
					<IconButton onClick={handleOpenProfileMenu}>
						<Avatar
							id="profile-menu-button"
							src={avatarImage}
							aria-controls={profileMenuOpen ? 'true' : undefined}
							aria-haspopup="true"
							aria-expanded={profileMenuOpen ? 'true' : undefined}
						/>
					</IconButton>
					<Menu
						id="profile-menu"
						anchorEl={element}
						open={profileMenuOpen}
						onClose={handleCloseProfileMenu}
						MenuListProps={{ 'aria-labelledby': 'profile-menu-button' }}
						anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
						transformOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
						<Stack spacing={1} px={1}>
							{Profile_Menu.map(({ title, Icon }) => (
								<MenuItem
									key={`profile-menu-button-${title}`}
									component={IconButton}
									data-value={title}
									disabled={selectedProfileMenu === title}
									onClick={handleSelectProfileMenu}>
									<Stack
										sx={{ width: '100%' }}
										spacing={2}
										direction="row"
										alignItems="center"
										justifyContent="space-between">
										<Typography component="span" variant="caption">
											{title}
										</Typography>
										<Icon />
									</Stack>
								</MenuItem>
							))}
						</Stack>
					</Menu>
				</Stack>
			</Stack>
		</SideNavigationStyled>
	)
}
