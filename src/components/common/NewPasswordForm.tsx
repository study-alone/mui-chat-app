import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { FormProvider, useForm } from 'react-hook-form'
import { Alert, Button, Stack } from '@mui/material'
import { isEmpty } from 'lodash-es'
import { TextField } from '@components/common/hook-form'

type NewPasswordScheme = {
	newPassword: string
	confirmPassword: string
}

const newPasswordScheme = yupResolver(
	Yup.object().shape({
		newPassword: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
		confirmPassword: Yup.string()
			.required('Password is required')
			.oneOf([Yup.ref('newPassword'), null], 'Password must match'),
	}),
)

export const NewPasswordForm: React.FC = () => {
	const methods = useForm<NewPasswordScheme>({
		mode: 'all',
		resolver: newPasswordScheme,
		defaultValues: {
			newPassword: '',
			confirmPassword: '',
		},
	})
	const {
		formState: { errors },
	} = methods

	const onSubmit = async (data: NewPasswordScheme) => {
		/** nothing */
	}

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<Stack spacing={3}>
					{!isEmpty(errors) && (
						<Alert severity="error">
							{errors.newPassword
								? errors.newPassword.message
								: errors.confirmPassword
								? errors.confirmPassword.message
								: ''}
						</Alert>
					)}
					<TextField name="userName" label="User Name" defaultValue="Jone Doe" autoComplete="username" />
					<TextField name="newPassword" label="New Password" type="password" autoComplete="new-password" />
					<TextField
						name="confirmPassword"
						label="Confirm Password"
						type="password"
						autoComplete="new-password"
					/>
					<Button fullWidth color="inherit" size="large" type="submit" variant="containedNoneHover">
						Send Request
					</Button>
				</Stack>
			</form>
		</FormProvider>
	)
}
