import { Box, Link, Stack, Typography } from '@mui/material'
import { NewPasswordForm } from '@components/common'
import { CaretLeft } from 'phosphor-react'

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
				href="/auth/login"
				color="inherit"
				variant="subtitle2"
				sx={{ mt: 3, mx: 'auto', alignItems: 'center', display: 'inline-flex' }}
			>
				<CaretLeft />
				Return to sign in
			</Link>
		</Box>
	)
}

export default NewPassword