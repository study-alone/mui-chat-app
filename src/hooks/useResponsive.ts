// @mui
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import type { Breakpoint } from '@mui/material/styles'

// ----------------------------------------------------------------------

type Query = 'up' | 'down' | 'between' | 'only'
export default function useResponsive(
	query: Query,
	key: Breakpoint,
	start: Breakpoint = 'md',
	end: Breakpoint = 'md',
) {
	const theme = useTheme()
	const mediaUp = useMediaQuery(theme.breakpoints.up(key))
	const mediaDown = useMediaQuery(theme.breakpoints.down(key))
	const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end))
	const mediaOnly = useMediaQuery(theme.breakpoints.only(key))
	const queries = {
		up: mediaUp,
		down: mediaDown,
		between: mediaBetween,
		only: mediaOnly,
	}

	return queries[query] || null
}
