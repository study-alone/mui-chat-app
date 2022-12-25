import { m } from 'framer-motion'
// @mui
import { Box } from '@mui/material'
//
import { varFade } from '@components/animate/variants'

import type { BoxProps } from '@mui/material'
import type { Variants } from 'framer-motion'
// ----------------------------------------------------------------------

interface TextAnimateProps {
	text: string
	variants?: Variants
	sx?: BoxProps['sx']
}

const TextAnimate: React.FC<TextAnimateProps> = ({ text, variants, sx, ...other }) => {
	return (
		<Box
			component={m.h1}
			sx={{
				typography: 'h1',
				overflow: 'hidden',
				display: 'inline-flex',
				...sx,
			}}
			{...other}>
			{text.split('').map((letter, index) => (
				<m.span key={index} variants={variants || varFade().inUp}>
					{letter}
				</m.span>
			))}
		</Box>
	)
}

export default TextAnimate
