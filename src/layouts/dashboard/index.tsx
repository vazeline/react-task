import React, { ReactNode } from 'react'

import { DrawerContextProvider } from './helpers/DraverContext'
import Box from '@mui/material/Box'
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { SidebarDrawer } from './components/SidebarDrawer'

const DashboardLayout = () => {
	return (
		<DrawerContextProvider>
			<Box
				sx={{
					textAlign: 'center',
					display: 'flex',
					flexDirection: 'column',
					minHeight: '100vh'
				}}
			>
				<Header />
				<Box
					sx={{
						display: 'flex',
						flex: 1,
						backgroundColor: '#ededed'
					}}
				>
					<SidebarDrawer />
					<main style={{ flex: 1, backgroundColor: '#EDEDED' }}>
						<Outlet />
					</main>
				</Box>
			</Box>
		</DrawerContextProvider>
	)
}

export { DashboardLayout }
