import { AuthSocial, ReagisterForm, Link } from '@components/common'
import { usePrompt } from '@hooks/usePrompt'
import { Stack, Typography } from '@mui/material'

const Register: React.FC = () => {
	usePrompt('현재 페이지를 벗어나시겠습니까?', true)

	return (
		<Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
			<Typography variant="h4">Get Started With Wawk</Typography>
			<Stack direction="row" spacing={0.5}>
				<Typography>Already have an account?</Typography>
				<Link to="/auth/login" variant="subtitle2">
					Sign In
				</Link>
			</Stack>
			{/* Register Form */}
			<ReagisterForm />
			<Typography
				component="div"
				sx={{ color: 'text.second', mt: 3, typography: 'caption', textAlign: 'center' }}
			>
				By signing up, I agree to &nbsp;
				<Link to="#" underline="always" color="text.primary">
					Terms of Service
				</Link>
				&nbsp;and&nbsp;
				<Link to="#" underline="always" color="text.primary">
					Privacy Policy
				</Link>
				.
			</Typography>
			<AuthSocial />
		</Stack>
	)
}

export default Register
