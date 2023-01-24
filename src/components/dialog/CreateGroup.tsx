import { useCallback } from 'react'
import { Button, Dialog, DialogContent, DialogTitle, Stack } from '@mui/material'
import { Transition } from '@components/dialog'
import * as Yup from 'yup'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Autocomplete, TextField } from '@components/common/hook-form'

interface CreateGroupProps {
	onClose(): void
}

type NewGroupScheme = {
	title: string
	members: string[]
}

const MEMBERS = ['Name 1', 'Name 2', 'Name 3']

const newGroupScheme = yupResolver(
	Yup.object().shape({
		title: Yup.string().required('Title is required'),
		members: Yup.array().min(2, 'Must have at lease 2 members'),
	}),
)

interface CreateGroupFormProps {
	onClose(): void
}

const CreateGroupForm: React.FC<CreateGroupFormProps> = ({ onClose }) => {
	const methods = useForm<NewGroupScheme>({
		resolver: newGroupScheme,
		mode: 'onTouched',
		defaultValues: {
			title: '',
			members: [],
		},
	})

	const {
		reset,
		watch,
		setError,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful, isValid },
	} = methods

	const onSubmit = async (data: NewGroupScheme) => {
		/** nothing */
	}

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<Stack spacing={3}>
					<TextField name="title" label="Title" />
					<Autocomplete
						name="members"
						label="Members"
						multiple
						freeSolo
						options={MEMBERS.concat()}
						ChipProps={{ size: 'medium' }}
					/>
					<Stack spacing={2} direction="row" alignItems="center" justifyContent="end">
						<Button onClick={onClose}>Cancel</Button>
						<Button type="submit" variant="contained">
							Create
						</Button>
					</Stack>
				</Stack>
			</form>
		</FormProvider>
	)
}

const CreateGroup: React.FC<CreateGroupProps> = ({ onClose }) => {
	const handleClose = useCallback(() => {
		typeof onClose === 'function' && onClose()
	}, [onClose])

	return (
		<Dialog
			open
			fullWidth
			maxWidth="xs"
			onClose={handleClose}
			TransitionComponent={Transition}
			keepMounted
			sx={{ p: 4 }}
		>
			{/* Title */}
			<DialogTitle sx={{ mb: 3 }}>Create New Group</DialogTitle>
			{/* Content */}
			<DialogContent>
				{/* Form */}
				<CreateGroupForm onClose={onClose} />
			</DialogContent>
		</Dialog>
	)
}

export default CreateGroup
