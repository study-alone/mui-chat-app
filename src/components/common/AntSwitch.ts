import { Switch, switchClasses } from '@mui/material'
import { styled } from '@mui/material/styles'

export const AntSwitch = styled(Switch)(({ theme }) => ({
	width: 40,
	height: 20,
	padding: 0,
	display: 'flex',
	'&:active': {
		[`& .${switchClasses.thumb}`]: {
			width: 15,
		},
		[`& .${switchClasses.switchBase}.${switchClasses.checked}`]: {
			transform: 'translateX(9px)',
		},
	},
	[`& .${switchClasses.switchBase}`]: {
		padding: 2,
		[`&.${switchClasses.checked}`]: {
			transform: 'translateX(20px)',
			color: '#fff',
			[`& + .${switchClasses.track}`]: {
				opacity: 1,
				backgroundColor: theme.palette.primary.main,
			},
		},
	},
	[`& .${switchClasses.thumb}`]: {
		boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
		width: 16,
		height: 16,
		borderRadius: 8,
		transition: theme.transitions.create(['width'], {
			duration: 200,
		}),
	},
	[`& .${switchClasses.track}`]: {
		borderRadius: 20 / 2,
		opacity: 1,
		backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
		boxSizing: 'border-box',
	},
}))
