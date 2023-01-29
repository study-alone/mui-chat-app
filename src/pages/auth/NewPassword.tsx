import { Box, Stack, Typography } from '@mui/material'
import { NewPasswordForm, Link, Icon } from '@components/common'

const NewPassword: React.FC = () => {
	return (
		<Box>
			<Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
				<Typography variant="h3" paragraph>
					Reset Password
				</Typography>
				<Typography sx={{ color: 'text.secondary', mb: 5 }}>Please set your new password</Typography>
			</Stack>
			{/* New Password Form */}
			<NewPasswordForm />
			<Link
				to="/auth/login"
				color="inherit"
				variant="subtitle2"
				sx={{ mt: 3, mx: 'auto', alignItems: 'center', display: 'inline-flex' }}
			>
				<Icon.CaretLeft />
				Return to sign in
			</Link>
		</Box>
	)
}

export default NewPassword
