import { Divider, Link, Stack, Typography } from '@mui/material'
import { AuthSocial, LoginForm } from '@components/common'

const Login: React.FC = () => {
	return (
		<>
			<Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
				<Typography variant="h4">Login to Tawk</Typography>
				<Stack direction="row" spacing={0.5}>
					<Typography variant="body2">New user?</Typography>
					<Link href="/auth/register" variant="subtitle2">
						Create an account
					</Link>
				</Stack>
				{/* Login form */}
				<LoginForm />
				<Divider variant="dashedAndSpacing">OR</Divider>
				{/* Auth social */}
				<AuthSocial />
			</Stack>
		</>
	)
}

export default Login
