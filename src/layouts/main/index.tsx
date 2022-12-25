import { Outlet } from 'react-router-dom'

const MainLayout: React.FC = () => {
	return (
		<>
			<div>Main Layout</div>

			<Outlet />
		</>
	)
}

export default MainLayout
