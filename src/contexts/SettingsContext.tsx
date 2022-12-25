// provider === component
import React, { createContext, useEffect } from 'react'
import useLocalStorage from '@hooks/useLocalStorage'
import getColorPresets, { defaultPreset, colorPresets } from '@utils/getColorPresets'
import { defaultSettings, Settings } from '@utils/config'

import type { Lang } from '@utils/config'
import type { ColorPresetKeys } from '@utils/getColorPresets'

type ChangeEvent = React.ChangeEvent<HTMLInputElement>
type ClickEvent = React.MouseEvent<HTMLButtonElement>

const initialState = {
	...defaultSettings,

	// Mode
	onToggleMode: () => {
		/** nothing */
	},
	onChangeMode: () => {
		/** nothing */
	},

	// Direction
	onToggleDirection: () => {
		/** nothing */
	},
	onChangeDirection: () => {
		/** nothing */
	},
	onChangeDirectionByLang: () => {
		/** nothing */
	},

	// Layout
	onToggleLayout: () => {
		/** nothing */
	},
	onChangeLayout: () => {
		/** nothing */
	},

	// Contrast
	onToggleContrast: () => {
		/** nothing */
	},
	onChangeContrast: () => {
		/** nothing */
	},

	// Color
	onChangeColor: () => {
		/** nothing */
	},
	setColor: defaultPreset,
	colorOption: [],

	// Stretch
	onToggleStretch: () => {
		/** nothing */
	},

	// Reset
	onResetSetting: () => {
		/** nothing */
	},
}

const SettingsContext = createContext<
	{
		colorOption: { name: string; value: string }[]
		setColor: typeof defaultPreset
		onChangeColor(event: ChangeEvent, value: string): void
		onChangeContrast(event: ChangeEvent, value: string): void
		onChangeDirection(event: ChangeEvent, value: string): void
		onChangeLayout(event: ChangeEvent, value: string): void
		onChangeMode(event: ChangeEvent, value: string): void
		onToggleStretch(event: ClickEvent): void
		onToggleMode(event: ChangeEvent, checked: boolean): void
		onToggleDirection(event: ClickEvent): void
		onChangeDirectionByLang(lang: Lang): void
		onToggleLayout(): void
		onToggleContrast(): void
		onResetSetting(): void
	} & Settings
>(initialState)

const SettingsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const { value: settings, setValueInLocalStorage: setSettings } = useLocalStorage('settings', {
		themeMode: initialState.themeMode,
		themeLayout: initialState.themeLayout,
		themeStretch: initialState.themeStretch,
		themeContrast: initialState.themeContrast,
		themeDirection: initialState.themeDirection,
		themeColorPresets: initialState.themeColorPresets,
	})

	const isArabic = localStorage.getItem('i18nextLng') === 'ar'

	useEffect(() => {
		if (isArabic) {
			onChangeDirectionByLang('ar')
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isArabic])

	// Mode

	const onToggleMode = () => {
		setSettings({
			...settings,
			themeMode: settings.themeMode === 'light' ? 'dark' : 'light',
		})
	}

	const onChangeMode = (event: ChangeEvent) => {
		setSettings({
			...settings,
			themeMode: event.target.value as 'light' | 'dark',
		})
	}

	// Direction

	const onToggleDirection = () => {
		setSettings({
			...settings,
			themeDirection: settings.themeDirection === 'rtl' ? 'ltr' : 'rtl',
		})
	}

	const onChangeDirection = (event: ChangeEvent) => {
		setSettings({
			...settings,
			themeDirection: event.target.value as 'ltr' | 'rtl',
		})
	}

	const onChangeDirectionByLang = (lang: Lang) => {
		setSettings({
			...settings,
			themeDirection: lang === 'ar' ? 'rtl' : 'ltr',
		})
	}

	// Layout

	const onToggleLayout = () => {
		setSettings({
			...settings,
			themeLayout: settings.themeLayout === 'vertical' ? 'horizontal' : 'vertical',
		})
	}

	const onChangeLayout = (event: ChangeEvent) => {
		setSettings({
			...settings,
			themeLayout: event.target.value as 'horizontal' | 'vertical',
		})
	}

	// Contrast

	const onToggleContrast = () => {
		setSettings({
			...settings,
			themeContrast: settings.themeContrast === 'default' ? 'bold' : 'default',
		})
	}

	const onChangeContrast = (event: ChangeEvent) => {
		setSettings({
			...settings,
			themeContrast: event.target.value as 'bold' | 'default',
		})
	}

	// Color

	const onChangeColor = (event: ChangeEvent) => {
		setSettings({
			...settings,
			themeColorPresets: event.target.value as ColorPresetKeys,
		})
	}

	// Stretch

	const onToggleStretch = () => {
		setSettings({
			...settings,
			themeStretch: !settings.themeStretch,
		})
	}

	// Reset

	const onResetSetting = () => {
		setSettings({
			themeMode: initialState.themeMode,
			themeLayout: initialState.themeLayout,
			themeStretch: initialState.themeStretch,
			themeContrast: initialState.themeContrast,
			themeDirection: initialState.themeDirection,
			themeColorPresets: initialState.themeColorPresets,
		})
	}

	return (
		<SettingsContext.Provider
			value={{
				...settings, // Mode
				onToggleMode,
				onChangeMode,

				// Direction
				onToggleDirection,
				onChangeDirection,
				onChangeDirectionByLang,

				// Layout
				onToggleLayout,
				onChangeLayout,

				// Contrast
				onChangeContrast,
				onToggleContrast,

				// Stretch
				onToggleStretch,

				// Color
				onChangeColor,
				setColor: getColorPresets(settings.themeColorPresets),
				colorOption: colorPresets.map((color) => ({
					name: color.name,
					value: color.main,
				})),

				// Reset
				onResetSetting,
			}}>
			{children}
		</SettingsContext.Provider>
	)
}

export { SettingsContext }

export default SettingsProvider
