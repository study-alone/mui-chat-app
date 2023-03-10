import { ResetPasswordForm, Link, Icon } from '@components/common'
import { Stack, Typography } from '@mui/material'

const ResetPassword: React.FC = () => {
	return (
		<Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
			<Typography variant="h3" paragraph>
				Forgot your Password?
			</Typography>
			<Typography sx={{ color: 'text.secondary', mb: 5 }}>
				Please enter the email address addociated with your account and We will email you a link to
				reset your password.
			</Typography>
			{/* Reset Password Form */}
			<ResetPasswordForm />
			<Link
				to="/auth/login"
				color="inherit"
				variant="subtitle2"
				sx={{ mt: 3, mx: 'auto', alignItems: 'center', display: 'inline-flex' }}
			>
				<Icon.CaretLeft />
				Return to sign in
			</Link>
		</Stack>
	)
}

export default ResetPassword
