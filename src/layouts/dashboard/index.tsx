import { Outlet } from 'react-router-dom'
import { Stack } from '@mui/material'
import { SideNavigation } from '@layouts/dashboard/SideNavigation'

const DashboardLayout: React.FC = () => {
	return (
		<Stack direction="row">
			<SideNavigation />
			<Outlet />
		</Stack>
	)
}

export default DashboardLayout
