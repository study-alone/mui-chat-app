import { useEffect, useState } from 'react'
import { Router } from 'react-router-dom'
import { Action } from 'history'
import type { BrowserHistory } from 'history'

export interface AppRouterProps extends React.PropsWithChildren {
	basename?: string
	history: BrowserHistory
}

export const AppRouter: React.FC<AppRouterProps> = ({ basename, children, history }) => {
	const [customHistory, setCustomHistory] = useState<Pick<BrowserHistory, 'action' | 'location'>>({
		action: history.action,
		location: history.location,
	})
	const [locationKeys, setLocationKeys] = useState<string[]>([])

	useEffect(() => {
		return history.listen((update) => {
			setCustomHistory(update)

			if (history.action === Action.Push) {
				setLocationKeys([update.location.key])
			}

			if (history.action === Action.Pop) {
				if (locationKeys[1] === update.location.key) {
					setLocationKeys(([_, ...keys]) => keys)
					console.log('forward')
				} else {
					setLocationKeys((keys) => [update.location.key, ...keys])
					console.log('backward')
				}
			}
		})
	}, [history, locationKeys])

	return (
		<Router
			basename={basename}
			location={customHistory.location}
			navigationType={customHistory.action}
			navigator={history}
		>
			{children}
		</Router>
	)
}
