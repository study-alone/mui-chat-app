import { FormProvider } from 'react-hook-form'

import type { FormProviderProps } from 'react-hook-form'

export interface FormProps extends FormProviderProps {
	onSubmit(): void
}

export const Form: React.FC<FormProps> = ({ children, onSubmit, ...restProps }) => {
	return (
		<FormProvider {...restProps}>
			<form onSubmit={onSubmit}>{children}</form>
		</FormProvider>
	)
}
