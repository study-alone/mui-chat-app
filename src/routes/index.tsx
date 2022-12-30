import React, { Suspense, lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

// layouts
import DashboardLayout from '@layouts/dashboard'
import MainLayout from '@layouts/main'

// config
import { DEFAULT_PATH } from '@utils/config'
import { LoadingScreen } from '@components/common'

const WrapSuspens: React.FC<React.PropsWithChildren> = ({ children }) => {
	return <Suspense fallback={<LoadingScreen />}>{children}</Suspense>
}

const generatePage = (Component: React.LazyExoticComponent<React.FC>) => {
	return () => WrapSuspens({ children: <Component /> })
}
const GeneralApp = generatePage(lazy(() => import('@pages/dashboard/GeneralApp')))
const Page404 = generatePage(lazy(() => import('@pages/Page404')))
const Settings = generatePage(lazy(() => import('@pages/dashboard/Settings')))
const Login = generatePage(lazy(() => import('@pages/auth/Login')))

export default function Router() {
	return useRoutes([
		{
			path: '/auth',
			element: <MainLayout />,
			children: [
				{
					path: 'login',
					element: <Login />,
				},
			],
		},
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
