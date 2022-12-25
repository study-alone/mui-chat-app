import { useTranslation } from 'react-i18next'
import useSettings from './useSettings'
// config
import { allLangs, defaultLang } from '@utils/config'

// ----------------------------------------------------------------------

export default function useLocales() {
	const { i18n, t: translate } = useTranslation()

	const { onChangeDirectionByLang } = useSettings()

	const langStorage = localStorage.getItem('i18nextLng')

	const currentLang = allLangs.find((_lang) => _lang.value === langStorage) || defaultLang

	const handleChangeLanguage = (newlang: string) => {
		i18n.changeLanguage(newlang)
		onChangeDirectionByLang('en')
	}

	return {
		onChangeLang: handleChangeLanguage,
		translate,
		currentLang,
		allLangs,
	}
}
