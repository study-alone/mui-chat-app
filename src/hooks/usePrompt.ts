import { useCallback } from 'react'
import { useBlocker } from '@hooks/useBlocker'

import type { Blocker } from 'history'

interface UsePromptHook {
	(message: string, when?: boolean): void
}

export const usePrompt: UsePromptHook = (message, when = true) => {
	const blocker = useCallback<Blocker>(
		(tx) => {
			if (window.confirm(message)) tx.retry()
		},
		[message],
	)

	useBlocker(blocker, when)
}
