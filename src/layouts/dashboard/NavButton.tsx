import { memo, useCallback } from 'react'
import { IconButton } from '@mui/material'
import { IconButtonStyled } from '@layouts/dashboard/index.styled'

interface NavButtonProps extends React.PropsWithChildren {
	isActive: boolean
	index: number
	onClick(index: number): void
}

export const NavButton = memo<NavButtonProps>(({ isActive, index, onClick, children }) => {
	const handleClick = useCallback(() => {
		onClick(index)
	}, [index, onClick])

	return (
		<IconButtonStyled isActive={isActive} p={1}>
			<IconButton className="icon-button" onClick={handleClick}>
				{children}
			</IconButton>
		</IconButtonStyled>
	)
})
NavButton.displayName = 'NavButton'
