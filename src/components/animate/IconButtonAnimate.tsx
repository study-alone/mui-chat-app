import { m } from 'framer-motion'
import { forwardRef } from 'react'
// @mui
import { Box, IconButton } from '@mui/material'

import type { IconButtonProps } from '@mui/material'

// ----------------------------------------------------------------------

const varSmall = {
	hover: { scale: 1.1 },
	tap: { scale: 0.95 },
}

const varMedium = {
	hover: { scale: 1.09 },
	tap: { scale: 0.97 },
}

const varLarge = {
	hover: { scale: 1.08 },
	tap: { scale: 0.99 },
}

// ----------------------------------------------------------------------

interface AnimateWrapProps extends React.PropsWithChildren {
	size?: 'small' | 'medium' | 'large'
}

const AnimateWrap: React.FC<AnimateWrapProps> = ({ size, children }) => {
	const isSmall = size === 'small'
	const isLarge = size === 'large'

	return (
		<Box
			component={m.div}
			whileTap="tap"
			whileHover="hover"
			variants={(isSmall && varSmall) || (isLarge && varLarge) || varMedium}
			sx={{
				display: 'inline-flex',
			}}
		>
			{children}
		</Box>
	)
}

interface IconButtonAnimateProps extends React.PropsWithChildren, IconButtonProps {
	color?: 'inherit' | 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'
	size?: 'small' | 'medium' | 'large'
}

const IconButtonAnimate = forwardRef<HTMLButtonElement, IconButtonAnimateProps>(
	({ children, size = 'medium', ...other }, ref) => (
		<AnimateWrap size={size}>
			<IconButton size={size} ref={ref} {...other}>
				{children}
			</IconButton>
		</AnimateWrap>
	),
)

IconButtonAnimate.displayName = 'IconButtonAnimate'

export default IconButtonAnimate
