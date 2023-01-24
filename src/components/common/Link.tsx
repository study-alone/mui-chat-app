import { Link as MuiLink } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import type { LinkProps as MuiLinkProps } from '@mui/material'

type LinkProps = React.PropsWithChildren & Omit<MuiLinkProps<typeof RouterLink>, 'component'>

export const Link: React.FC<LinkProps> = ({ children, ...restProps }) => {
	return (
		<MuiLink component={RouterLink} {...restProps}>
			{children}
		</MuiLink>
	)
}
