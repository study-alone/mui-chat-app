import React from 'react'
import { createRoot } from 'react-dom/client'
import { collate } from 'react-collate'
import { RecoilRoot } from 'recoil'
import { DebugObserver } from '@store/devtools'
import { HelmetProvider } from 'react-helmet-async'
import SettingsProvider from '@contexts/SettingsContext'
import { BrowserRouter } from 'react-router-dom'

import type { Position } from '@store/devtools'

interface ProviderProps {
	recoilDebuggerPosition: Position
}

export const Provider = collate<ProviderProps>()
	/** StrictMode: 'react'의 잠재적 문재점 확인 */
	.add(({ children }) => <React.StrictMode>{children}</React.StrictMode>)
	/** RcoilRoot: recoil의 root store */
	.add(({ children }) => (
		<RecoilRoot>
			<DebugObserver position="top-left" />
			{children}
		</RecoilRoot>
	))
	/** HelmetProvider: 'head' 영역의 정보 관리 및 적용 범위 */
	.add(({ children }) => <HelmetProvider>{children}</HelmetProvider>)
	/** SettingsProvider: UI 세팅 컴포넌트 핸들링 */
	.add(({ children }) => <SettingsProvider>{children}</SettingsProvider>)
	/** BrowserRouter: react router 적용 */
	.add(({ children }) => <BrowserRouter>{children}</BrowserRouter>)
	.build()

const container = (id: string) => {
	return (
		document.getElementById(id) ??
		(() => {
			const container = document.createElement('div')
			container.id = 'root'
			document.body.appendChild(container)

			return container
		})()
	)
}

interface CreateApp {
	(
		args: {
			element: React.ReactElement
			containerId?: string
		} & ProviderProps,
	): void
}
export const createApp: CreateApp = ({ element, containerId, recoilDebuggerPosition }) => {
	createRoot(container(containerId || 'root')).render(
		<Provider recoilDebuggerPosition={recoilDebuggerPosition}>{element}</Provider>,
	)
}
