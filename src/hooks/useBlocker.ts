import { useEffect } from 'react'
import { browserHistory } from '@utils/browserHistory'

import type { Blocker } from 'history'

interface UseBlockerHook {
	(blocker: Blocker, when?: boolean): void
}

export const useBlocker: UseBlockerHook = (blocker, when = true) => {
	useEffect(() => {
		if (!when) return

		const unblock = browserHistory.block((tx) => {
			const autoUnblockingTx = {
				...tx,
				retry() {
					unblock()
					tx.retry()
				},
			}
			blocker(autoUnblockingTx)
		})

		return unblock
	}, [blocker, when])
}
