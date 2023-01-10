import { Box, Divider, IconButton, Stack } from '@mui/material'
import { GithubLogo, GoogleLogo, TwitterLogo } from 'phosphor-react'

export const AuthSocial: React.FC = () => {
	return (
		<Box>
			<Stack direction="row" justifyContent="center" spacing={2}>
				<IconButton>
					<GoogleLogo color="#DF3E30" />
				</IconButton>
				<IconButton>
					<GithubLogo />
				</IconButton>
				<IconButton>
					<TwitterLogo color="#1C9CEA" />
				</IconButton>
			</Stack>
		</Box>
	)
}
