import { yupResolver } from '@hookform/resolvers/yup'
import { Alert, Button, Stack } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { TextField } from '@components/common/hook-form'
import { isEmpty } from 'lodash-es'

type RegisterScheme = {
	firstName: string
	lastName: string
	email: string
	password: string
	afterSubmit: boolean
}

export const ReagisterForm: React.FC = () => {
	const registerScheme = Yup.object().shape({
		firstName: Yup.string().required('First Name is required'),
		lastName: Yup.string().required('last Name is required'),
		email: Yup.string().required('Email is required').email('Email must be a valid email address'),
		password: Yup.string().required('Password is required'),
	})

	const methods = useForm<RegisterScheme>({
		resolver: yupResolver(registerScheme),
		mode: 'all',
		defaultValues: {
			firstName: 'Jone',
			lastName: 'Doe',
			email: 'demo@tawk.com',
			password: 'demo1234',
		},
	})
	const {
		formState: { errors },
	} = methods

	const onSubmit = async (data: RegisterScheme) => {
		/** nothing */
	}

	console.log(errors)

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<Stack spacing={3}>
					{!isEmpty(errors) && <Alert severity="error">There are entries incorrectly.</Alert>}
					<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
						<TextField name="firstName" label="First Name" />
						<TextField name="lastName" label="Last Name" />
					</Stack>
					<TextField name="email" label="Email address" />
					<TextField name="password" label="Password" type="password" />
					<Button fullWidth color="inherit" size="large" type="submit" variant="containedNoneHover">
						Submit
					</Button>
				</Stack>
			</form>
		</FormProvider>
	)
}
