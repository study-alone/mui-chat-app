import { forwardRef } from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import { TextField as MUITextField } from '@mui/material'

import type { TextFieldProps } from '@mui/material'

export const TextField = forwardRef<HTMLInputElement, WithRequiredProperty<TextFieldProps, 'name' | 'helperText'>>(
	({ name, helperText, ...restProps }, ref) => {
		const { control } = useFormContext()

		return (
			<Controller
				name={name}
				control={control}
				render={({ field, fieldState: { error } }) => (
					<MUITextField
						{...field}
						fullWidth
						error={!!error}
						helperText={error ? error.message : helperText}
						{...restProps}
						ref={ref}
					/>
				)}
			/>
		)
	},
)
TextField.displayName = 'TextField'
