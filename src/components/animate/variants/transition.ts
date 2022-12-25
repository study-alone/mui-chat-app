import type { TransitionEasing } from '@components/animate/variants'

type Duration = number
type Ease = TransitionEasing | [number, number, number, number]

interface TransitionHoverArgs {
	duration?: Duration
	ease?: Ease
}

interface TransitionEnterArgs {
	durationIn?: Duration
	easeIn?: Ease
}

interface TransitionExitArgs {
	durationOut?: Duration
	easeOut?: Ease
}

interface TransitionReturns {
	duration: Duration
	ease: Ease
}

interface TransitionHover {
	(props: TransitionHoverArgs): TransitionReturns
}
export const varTranHover: TransitionHover = (props) => {
	const duration = props?.duration || 0.32
	const ease = props?.ease || [0.43, 0.13, 0.23, 0.96]

	return { duration, ease }
}

interface TransitionEnter {
	(props: TransitionEnterArgs): TransitionReturns
}
export const varTranEnter: TransitionEnter = (props) => {
	const duration = props?.durationIn || 0.64
	const ease = props?.easeIn || [0.43, 0.13, 0.23, 0.96]

	return { duration, ease }
}

interface TransitionExit {
	(props: TransitionExitArgs): TransitionReturns
}
export const varTranExit: TransitionExit = (props) => {
	const duration = props?.durationOut || 0.48
	const ease = props?.easeOut || [0.43, 0.13, 0.23, 0.96]

	return { duration, ease }
}
