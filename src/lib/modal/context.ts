import React from 'react'
import { dialog } from '@components/dialog'

type ComponentType = typeof dialog[keyof typeof dialog]

export type ModalState = {
	Component: ComponentType
	props: React.ComponentProps<ComponentType>
}

export type ModalDispatch = {
	open(Component: ComponentType, props?: React.ComponentProps<ComponentType>): void
	close(Component: ComponentType): void
}

export const ModalDispatchContext = React.createContext<ModalDispatch>({
	open: () => {
		/** nothing */
	},
	close: () => {
		/** nothing */
	},
})
export const ModalStateContext = React.createContext<ModalState[]>([])
