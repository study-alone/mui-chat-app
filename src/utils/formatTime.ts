import { format, getTime, formatDistanceToNow } from 'date-fns'

// ----------------------------------------------------------------------

type Value = number | string

export function fDate(date: Value) {
	return format(new Date(date), 'dd MMMM yyyy')
}

export function fDateTime(date: Value) {
	return format(new Date(date), 'dd MMM yyyy HH:mm')
}

export function fTimestamp(date: Value) {
	return getTime(new Date(date))
}

export function fDateTimeSuffix(date: Value) {
	return format(new Date(date), 'dd/MM/yyyy hh:mm p')
}

export function fToNow(date: Value) {
	return formatDistanceToNow(new Date(date), {
		addSuffix: true,
	})
}
