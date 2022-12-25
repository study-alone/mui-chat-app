import numeral from 'numeral'

// ----------------------------------------------------------------------

type Value = number

export function fCurrency(number: Value) {
	return numeral(number).format(Number.isInteger(number) ? '$0,0' : '$0,0.00')
}

export function fPercent(number: Value) {
	return numeral(number / 100).format('0.0%')
}

export function fNumber(number: Value) {
	return numeral(number).format()
}

export function fShortenNumber(number: Value) {
	return numeral(number).format('0.00a').replace('.00', '')
}

export function fData(number: Value) {
	return numeral(number).format('0.0 b')
}
