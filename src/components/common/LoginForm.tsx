import { useState } from 'react'
import { Alert, Button, IconButton, Link, Stack } from '@mui/material'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import type { ErrorOption } from 'react-hook-form'
import { TextField } from '@components/common/hook-form'
import { Eye, EyeSlash } from 'phosphor-react'

export const LoginForm: React.FC = () => {
	const [showPassword, setShowPassword] = useState(false)
	const loginSchema = yup.object().shape({
		email: yup.string().required('Email is required').email('Email must be a valid email address'),
		password: yup.string().required('Password is required'),
	})
	const defaultValues = {
		email: 'demo@tawk.com',
		password: 'demo1234',
		afterSubmit: false,
	}

	const methods = useForm({
		resolver: yupResolver(loginSchema),
		defaultValues,
	})
	const {
		reset,
		setError,
		handleSubmit,
		formState: { errors /** isSubmitting, isSubmitSuccessful */ },
	} = methods

	const onSubmit = async () => {
		try {
			await console.log('...')
		} catch (error) {
			const e = error as ErrorOption
			console.log(e)
			reset()
			setError('afterSubmit', e)
		}
	}

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Stack spacing={3}>
					{!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
					<TextField name="email" label="Email address" variant="outlined" helperText="" />
					<TextField
						name="password"
						label="Password"
						variant="outlined"
						type={showPassword ? 'text' : 'password'}
						helperText=""
						InputProps={{
							endAdornment: (
								<IconButton onClick={() => setShowPassword((prev) => !prev)}>
									{showPassword ? <Eye /> : <EyeSlash />}
								</IconButton>
							),
						}}
					/>
				</Stack>
				<Stack alignItems="flex-end" sx={{ my: 2 }}>
					<Link variant="body2" color="inherit" underline="always">
						Forgot Password?
					</Link>
				</Stack>
				<Button
					fullWidth
					color="inherit"
					size="large"
					type="submit"
					variant="contained"
					sx={{
						bgcolor: 'text.primary',
						color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
						'&:hover': {
							bgcolor: 'text.primary',
							color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
						},
					}}>
					Login
				</Button>
			</form>
		</FormProvider>
	)
}
