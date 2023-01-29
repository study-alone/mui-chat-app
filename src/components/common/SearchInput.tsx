import { alpha, Box, InputBase, inputBaseClasses, styled } from '@mui/material'
import { Icon } from '@components/common'

export const SearchStyled = styled(Box)(({ theme }) => ({
	position: 'relative',
	borderRadius: 20,
	backgroundColor: alpha(theme.palette.background.paper, 1),
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	boxShadow: theme.shadows[0],
	transition: 'box-shadow 0.2s ease-in',
	'&:focus-within': {
		boxShadow: theme.shadows[5],
	},
}))

export const SearchIconWrapper = styled(Box)(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}))

export const InputBaseStyled = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	[`& .${inputBaseClasses.input}`]: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		width: '100%',
	},
}))

interface SearchInputProps {
	placeholder?: string
}
export const SearchInput: React.FC<SearchInputProps> = ({ placeholder = 'Search...' }) => {
	return (
		<SearchStyled>
			<SearchIconWrapper>
				<Icon.MagnifyingGlass color="#709CE6" />
			</SearchIconWrapper>
			<InputBaseStyled placeholder={placeholder} inputProps={{ 'aria-label': 'search' }} />
		</SearchStyled>
	)
}
