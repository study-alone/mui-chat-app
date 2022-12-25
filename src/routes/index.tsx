import React, { Suspense, lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

// layouts
import DashboardLayout from '@layouts/dashboard'

// config
import { DEFAULT_PATH } from '@utils/config'
import { LoadingScreen } from '@components/common'

const WrapSuspens: React.FC<React.PropsWithChildren> = ({ children }) => {
	return <Suspense fallback={<LoadingScreen />}>{children}</Suspense>
}

const GeneralAppPage = lazy(() => import('@pages/dashboard/GeneralApp'))
const GeneralApp: React.FC = () => (
	<WrapSuspens>
		<GeneralAppPage />
	</WrapSuspens>
)
const Page404Page = lazy(() => import('@pages/Page404'))
const Page404: React.FC = () => (
	<WrapSuspens>
		<Page404Page />
	</WrapSuspens>
)

const SettingsPage = lazy(() => import('@pages/dashboard/Settings'))
const Settings: React.FC = () => (
	<WrapSuspens>
		<SettingsPage />
	</WrapSuspens>
)

export default function Router() {
	return useRoutes([
		{
			path: '/',
			element: <DashboardLayout />,
			children: [
				{ element: <Navigate to={DEFAULT_PATH} replace />, index: true },
				{ path: 'app', element: <GeneralApp /> },
				{ path: 'settings', element: <Settings /> },
				{ path: '404', element: <Page404 /> },
				{ path: '*', element: <Navigate to="/404" replace /> },
			],
		},
		{ path: '*', element: <Navigate to="/404" replace /> },
	])
}
