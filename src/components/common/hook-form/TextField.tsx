import { forwardRef, memo, useMemo, useState } from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import { IconButton, TextField as MUITextField } from '@mui/material'

import type { TextFieldProps as MuiTextFieldProps } from '@mui/material'
import { Eye, EyeSlash } from 'phosphor-react'

const PasswordVisibleIcon: React.FC<{ onClick: () => void; show: boolean }> = memo(({ onClick, show }) => {
	return <IconButton onClick={onClick}>{show ? <Eye /> : <EyeSlash />}</IconButton>
})
PasswordVisibleIcon.displayName = 'PasswordVisibleIcon'

type TextFieldProps = MuiTextFieldProps

export const TextField = forwardRef<HTMLInputElement, WithRequiredProperty<TextFieldProps, 'name'>>(
	({ name, helperText, type, ...restProps }, ref) => {
		const { control } = useFormContext()
		const [showPassword, setShowPassword] = useState(false)

		const conditionalProps = useMemo(() => {
			if (type === 'password') {
				return {
					InputProps: {
						endAdornment: (
							<PasswordVisibleIcon onClick={() => setShowPassword((prev) => !prev)} show={showPassword} />
						),
					},
				}
			}
			return {}
		}, [showPassword, type])

		const typeProp = useMemo(() => {
			const isPassword = type === 'password'
			return isPassword ? (showPassword ? 'text' : 'password') : 'text'
		}, [showPassword, type])

		return (
			<Controller
				name={name}
				control={control}
				render={({ field, fieldState: { error } }) => (
					<MUITextField
						{...field}
						type={typeProp}
						fullWidth
						error={!!error}
						helperText={error ? error.message : helperText}
						{...restProps}
						{...conditionalProps}
						ref={ref}
					/>
				)}
			/>
		)
	},
)
TextField.displayName = 'TextField'
