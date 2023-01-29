import { useCallback, useState } from 'react'
import { ModalDispatchContext, ModalStateContext } from '@lib/modal/context'
import { Modals } from '@lib/modal/Modal'
import type { ModalState, ModalDispatch } from '@lib/modal/context'

export const ModalProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [openModals, setOpenModals] = useState<ModalState[]>([])

	const open = useCallback<ModalDispatch['open']>((Component, props) => {
		setOpenModals((modals) => {
			return [...modals, { Component, props }]
		})
	}, [])

	const close = useCallback<ModalDispatch['close']>((Component) => {
		setOpenModals((modals) => {
			return modals.filter((modal) => modal.Component !== Component)
		})
	}, [])

	return (
		<ModalStateContext.Provider value={openModals}>
			<ModalDispatchContext.Provider value={{ open, close }}>
				{children}
				<Modals />
			</ModalDispatchContext.Provider>
		</ModalStateContext.Provider>
	)
}
