import { Controller, useFormContext } from 'react-hook-form'
import { Autocomplete as MuiAutocomplete, TextField } from '@mui/material'

import type { ChipProps } from '@mui/material'

interface AutocompleteProps {
	name: string
	label: string
	helperText?: React.ReactNode
	multiple?: boolean
	freeSolo?: boolean
	options: string[]
	ChipProps?: ChipProps
}

export const Autocomplete: React.FC<AutocompleteProps> = ({ name, label, helperText = '', ...other }) => {
	const { control, setValue } = useFormContext()

	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState: { error } }) => (
				<MuiAutocomplete
					{...field}
					fullWidth
					value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
					onChange={(event, newValue) => setValue(name, newValue, { shouldValidate: true })}
					{...other}
					renderInput={(params) => (
						<TextField
							label={label}
							error={!!error}
							helperText={error ? error.message : helperText}
							{...params}
						/>
					)}
				/>
			)}
		/>
	)
}
