import { useState, useEffect, useMemo, useCallback } from 'react'
import { Settings } from '@utils/config'

// ----------------------------------------------------------------------

export default function useLocalStorage(key: string, defaultValue: Settings) {
	const [value, setValue] = useState<Settings>(() => {
		const storedValue = localStorage.getItem(key)

		return storedValue === null ? defaultValue : JSON.parse(storedValue)
	})

	useEffect(() => {
		const listener = (e: StorageEvent) => {
			if (e.storageArea === localStorage && e.key === key) {
				setValue(JSON.parse(e.newValue || 'null'))
			}
		}
		window.addEventListener('storage', listener)

		return () => {
			window.removeEventListener('storage', listener)
		}
	}, [key, defaultValue])

	const setValueInLocalStorage = useCallback(
		(settings: Settings | ((settings: Settings) => Settings)) => {
			setValue((currentValue) => {
				const result = typeof settings === 'function' ? settings(currentValue) : settings
				// const result = settings
				localStorage.setItem(key, JSON.stringify(result))

				return result
			})
		},
		[key],
	)

	return {
		value,
		setValueInLocalStorage,
	}
}
