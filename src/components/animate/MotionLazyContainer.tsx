import { LazyMotion } from 'framer-motion'

// ----------------------------------------------------------------------

// eslint-disable-next-line import/extensions
const loadFeatures = () => import('./features.js').then((res) => res.default)

const MotionLazyContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<LazyMotion strict features={loadFeatures}>
			{children}
		</LazyMotion>
	)
}

export default MotionLazyContainer
