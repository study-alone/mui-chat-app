import { m } from 'framer-motion'
import { forwardRef } from 'react'
// @mui
import { useTheme } from '@mui/material/styles'
import { Box, Fab } from '@mui/material'

import type { FabProps, BoxProps } from '@mui/material'

// ----------------------------------------------------------------------
interface FabButtonAnimateProps extends React.PropsWithChildren {
	color?: 'inherit' | 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'
	size?: 'small' | 'medium' | 'large'
	sx?: FabProps['sx']
	sxWrap?: BoxProps['sx']
}

const FabButtonAnimate = forwardRef<HTMLButtonElement, FabButtonAnimateProps>(
	({ color = 'primary', size = 'large', children, sx, sxWrap }, ref) => {
		const theme = useTheme()

		if (color === 'default' || color === 'inherit' || color === 'primary' || color === 'secondary') {
			return (
				<AnimateWrap size={size} sxWrap={sxWrap}>
					<Fab ref={ref} size={size} color={color} sx={sx}>
						{children}
					</Fab>
				</AnimateWrap>
			)
		}

		return (
			<AnimateWrap size={size} sxWrap={sxWrap}>
				<Fab
					ref={ref}
					size={size}
					sx={{
						boxShadow: theme.customShadows[color],
						color: theme.palette[color].contrastText,
						bgcolor: theme.palette[color].main,
						'&:hover': {
							bgcolor: theme.palette[color].dark,
						},
						...sx,
					}}
				>
					{children}
				</Fab>
			</AnimateWrap>
		)
	},
)

FabButtonAnimate.displayName = 'FabButtonAnimate'

export default FabButtonAnimate

// ----------------------------------------------------------------------

const varSmall = {
	hover: { scale: 1.07 },
	tap: { scale: 0.97 },
}

const varMedium = {
	hover: { scale: 1.06 },
	tap: { scale: 0.98 },
}

const varLarge = {
	hover: { scale: 1.05 },
	tap: { scale: 0.99 },
}

interface AnimateWrapProps extends React.PropsWithChildren {
	size?: 'small' | 'medium' | 'large'
	sxWrap?: BoxProps['sx']
}

const AnimateWrap: React.FC<AnimateWrapProps> = ({ size, children, sxWrap }) => {
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
				...sxWrap,
			}}
		>
			{children}
		</Box>
	)
}
