import { m } from 'framer-motion'
// @mui
import { Box } from '@mui/material'
// hooks
import useResponsive from '@hooks/useResponsive'
//
import { varContainer } from '@components/animate'

// ----------------------------------------------------------------------

interface MotionViewportProps extends React.PropsWithChildren {
	disableAnimatedMobile?: boolean
}

const MotionViewport: React.FC<MotionViewportProps> = ({ children, disableAnimatedMobile = false, ...other }) => {
	const isMobile = useResponsive('down', 'sm')

	if (isMobile && disableAnimatedMobile) {
		return <Box {...other}>{children}</Box>
	}

	return (
		<Box
			component={m.div}
			initial="initial"
			whileInView="animate"
			viewport={{ once: true, amount: 0.3 }}
			variants={varContainer()}
			{...other}
		>
			{children}
		</Box>
	)
}
export default MotionViewport
