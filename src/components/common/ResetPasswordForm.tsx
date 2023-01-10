import { yupResolver } from '@hookform/resolvers/yup'
import { Alert, Button, Stack } from '@mui/material'
import { isEmpty } from 'lodash-es'
import { FormProvider, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { TextField } from '@components/common/hook-form'

type ResetPasswordScheme = {
	email: string
}

const resetPasswordScheme = yupResolver(
	Yup.object().shape({
		email: Yup.string().required('Email is required').email('Email must be a valid email address'),
	}),
)

export const ResetPasswordForm: React.FC = () => {
	const methods = useForm({
		resolver: resetPasswordScheme,
		mode: 'onTouched',
		defaultValues: {
			email: 'demo@tawk.com',
		},
	})
	const {
		formState: { errors },
	} = methods

	const onSubmit = async (data: ResetPasswordScheme) => {
		/** nothind */
	}

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<Stack spacing={3}>
					{!isEmpty(errors) && <Alert severity="error">There are entries incorrectly.</Alert>}
					<TextField name="email" label="Email address" />
					<Button fullWidth color="inherit" size="large" type="submit" variant="containedNoneHover">
						Send Request
					</Button>
				</Stack>
			</form>
		</FormProvider>
	)
}
