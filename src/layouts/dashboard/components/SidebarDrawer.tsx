import React from 'react'
import Drawer from '@mui/material/Drawer'
import { useMediaQuery, useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useDrawerContext } from '../helpers/DraverContext'
import Sidebar from './Sidebar'

const StyledSidebarDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'isOpened' })<{ isOpened: boolean }>(
	({ isOpened, theme }) => ({
		width: isOpened ? 240 : theme.spacing(7),
		position: 'static',
		transition: isOpened
			? theme.transitions.create('width', {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.enteringScreen
					// eslint-disable-next-line no-mixed-spaces-and-tabs
			  })
			: theme.transitions.create('width', {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.leavingScreen
					// eslint-disable-next-line no-mixed-spaces-and-tabs
			  }),
		'& .MuiDrawer-paper': {
			background: 'white',
			position: 'static',
			overflowX: 'hidden'
		}
	})
)

const SidebarDrawer = () => {
	const { isOpened, toggleIsOpened } = useDrawerContext()
	const theme = useTheme()
	const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'))

	return (
		<StyledSidebarDrawer
			variant={isLargeScreen ? 'permanent' : 'temporary'}
			open={!isLargeScreen && isOpened ? true : false}
			onClose={() => toggleIsOpened(!isOpened)}
			isOpened={isOpened}
			sx={{
				zIndex: 10,
				maxHeight: '850px'
			}}
			PaperProps={{ sx: { borderRight: '0px' } }}
		>
			<Sidebar />
		</StyledSidebarDrawer>
	)
}

export { SidebarDrawer }
