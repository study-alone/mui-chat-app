import { Box, IconButton, Stack } from '@mui/material'
import { Icon } from '@components/common'

export const AuthSocial: React.FC = () => {
	return (
		<Box>
			<Stack direction="row" justifyContent="center" spacing={2}>
				<IconButton>
					<Icon.GoogleLogo color="#DF3E30" />
				</IconButton>
				<IconButton>
					<Icon.GithubLogo />
				</IconButton>
				<IconButton>
					<Icon.TwitterLogo color="#1C9CEA" />
				</IconButton>
			</Stack>
		</Box>
	)
}
