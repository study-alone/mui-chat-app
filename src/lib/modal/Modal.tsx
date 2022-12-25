import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { ModalDispatchContext, ModalStateContext } from '@lib/modal/context'
import { disableScroll } from '@utils/disableScroll'
import { omit } from 'lodash-es'

export interface ModalProps {
	onClose?(): void
	onSubmit?(...args: unknown[]): Promise<void>
}

interface ModalsProps {
	selector?: string
}

export const Modals: React.FC<ModalsProps> = ({ selector = 'modal-container' }) => {
	const openedModals = React.useContext(ModalStateContext)
	const { close } = React.useContext(ModalDispatchContext)
	const element =
		document.querySelector(selector) ??
		(() => {
			const modalContainer = document.createElement('div')
			modalContainer.id = selector
			return modalContainer
		})()

	React.useEffect(() => {
		if (openedModals.length) {
			disableScroll.on()
		} else {
			disableScroll.off()
		}
	})

	return (
		<>
			{openedModals.map(({ Component, props }, index) => {
				const onClose = () => {
					typeof props?.onClose === 'function' && props.onClose()
					close(Component)
				}
				const handleSubmit = async (...args: unknown[]) => {
					if (props) {
						if ('onSubmit' in props && typeof props.onSubmit === 'function') {
							await props.onSubmit(...args)
						}
						onClose()
					}
				}

				const restProps = {
					open: true,
					onClose: onClose,
					onSubmit: handleSubmit,
					...omit(props, ['onSubmit', 'onClose']),
				}

				return (
					element &&
					ReactDOM.createPortal(
						<Suspense>
							<Component key={index} {...restProps} />
						</Suspense>,
						element,
					)
				)
			})}
		</>
	)
}
