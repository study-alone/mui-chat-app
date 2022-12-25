// ----------------------------------------------------------------------

export default function getColorName(hex: string) {
	const color = hex

	const colors: { [key: string]: string } = {
		'#00AB55': 'Green',
		'#000000': 'Black',
		'#FFFFFF': 'White',
		'#FFC0CB': 'Pink',
		'#FF4842': 'Red',
		'#1890FF': 'Blue',
		'#94D82D': 'Greenyellow',
		'#FFC107': 'Orange',
	}

	return colors[hex] || color
}
