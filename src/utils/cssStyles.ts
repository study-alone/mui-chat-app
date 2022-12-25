import { alpha } from '@mui/material/styles'

import type { Direction } from '@components/animate/variants'
import type { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

function getDirection(value: Direction = 'bottom') {
	return {
		top: 'to top',
		right: 'to right',
		bottom: 'to bottom',
		left: 'to left',
	}[value]
}

// ----------------------------------------------------------------------
interface CSSStyleBlurProps {
	color?: string
	blur?: number
	opacity?: number
}
interface CSSStyleGradientProps {
	direction?: Direction
	startColor?: string
	endColor?: string
}
interface CSSStyleImageProps {
	url?: string
	direction?: Direction
	startColor?: string
	endColor?: string
}
export default function cssStyles(theme: Theme) {
	return {
		bgBlur: (props: CSSStyleBlurProps) => {
			const color = props?.color || theme?.palette.background.default || '#000000'
			const blur = props?.blur || 6
			const opacity = props?.opacity || 0.8

			return {
				backdropFilter: `blur(${blur}px)`,
				WebkitBackdropFilter: `blur(${blur}px)`, // Fix on Mobile
				backgroundColor: alpha(color, opacity),
			}
		},
		bgGradient: (props: CSSStyleGradientProps) => {
			const direction = getDirection(props?.direction)
			const startColor = props?.startColor || `${alpha('#000000', 0)} 0%`
			const endColor = props?.endColor || '#000000 75%'

			return {
				background: `linear-gradient(${direction}, ${startColor}, ${endColor});`,
			}
		},
		bgImage: (props: CSSStyleImageProps) => {
			const url = props?.url || '/assets/bg_gradient.jpg'
			const direction = getDirection(props?.direction)
			const startColor = props?.startColor || alpha(theme?.palette.grey[900] || '#000000', 0.88)
			const endColor = props?.endColor || alpha(theme?.palette.grey[900] || '#000000', 0.88)

			return {
				background: `linear-gradient(${direction}, ${startColor}, ${endColor}), url(${url})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center center',
			}
		},
	}
}
