import SimpleBarReact from 'simplebar-react'
// @mui
import { alpha, styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import type { BoxProps } from '@mui/material'
import 'simplebar-react/dist/simplebar.min.css'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
	flexGrow: 1,
	height: '100%',
	overflowY: 'scroll',
}))

export const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
	// maxHeight: '100%',
	'& .simplebar-scrollbar': {
		'&:before': {
			backgroundColor: alpha(theme.palette.grey[600], 0.48),
		},
		'&.simplebar-visible:before': {
			opacity: 1,
		},
	},
	'& .simplebar-track.simplebar-vertical': {
		width: 10,
	},
	'& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
		height: 6,
	},
	'& .simplebar-mask': {
		zIndex: 'inherit',
	},
	'& .simplebar-placeholder': {
		height: '0 !important',
	},
}))

// ----------------------------------------------------------------------

interface ScrollbarProps extends React.PropsWithChildren {
	sx?: BoxProps['sx']
}

export const Scrollbar: React.FC<ScrollbarProps> = ({ children, sx }) => {
	const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent

	const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)

	if (isMobile) {
		return <Box sx={{ overflowX: 'auto', ...sx }}>{children}</Box>
	}

	return (
		<RootStyle>
			<SimpleBarStyle timeout={500} clickOnTrack={false} sx={sx}>
				{children}
			</SimpleBarStyle>
		</RootStyle>
	)
}
