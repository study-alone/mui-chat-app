import { useCallback } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { uiState } from '@store/ui'

import type { ContactType } from '@store/ui'

export const useContactToggle = () => {
	const setUi = useSetRecoilState(uiState)
	const ui = useRecoilValue(uiState)

	const toggle = useCallback(() => {
		setUi((prev) => ({
			contact: {
				open: !prev.contact.open,
				type: 'own',
			},
		}))
	}, [setUi])

	const setType = useCallback((type: ContactType) => {
		setUi((prev) => ({
			contact: {
				open: prev.contact.open,
				type,
			},
		}))
	}, [])

	return {
		open: ui.contact.open,
		type: ui.contact.type,
		setType: setType,
		toggle,
	}
}
