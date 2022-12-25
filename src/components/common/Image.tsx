import { Box } from '@mui/material'
import type { BoxProps } from '@mui/material'

interface ImageProps {
	src: string
	alt: string
	sx?: BoxProps['sx']
}

export const Image: React.FC<ImageProps> = ({ src, alt, sx }) => {
	return (
		<Box sx={sx}>
			<img src={src} alt={alt} />
		</Box>
	)
}
