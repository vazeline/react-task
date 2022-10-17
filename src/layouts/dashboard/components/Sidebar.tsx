// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// TODO Fix this problem with eslint and types
import React from 'react'
import List from '@mui/material/List'
import { useLocation } from 'react-router-dom'
import { actionTypes, navList, navListCommon } from '../helpers/navList'
import { useDrawerContext } from '../helpers/DraverContext'
import { useTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import { Iconify } from '../../../shared/components/Iconify'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Icon from '@mui/material/Icon'
import { logout } from '../../../features/user/userSlice'
import { clearCredentials } from '../../../features/user/authSlice'
import { useAppDispatch } from '../../../shared/hooks/redux'

const Sidebar = () => {
	const dispatch = useAppDispatch()
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const { isOpened, toggleIsOpened } = useDrawerContext()
	const theme = useTheme()

	const handleLogout = () => {
		dispatch(logout())
		dispatch(clearCredentials())
		navigate('/auth/login')
	}

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				height: '100%'
			}}
		>
			<List>
				{navList.map(({ literal, route, icon }) => (
					<ListItem key={literal} disablePadding sx={{ display: 'block' }}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: isOpened ? 'initial' : 'center',
								px: 2
							}}
							selected={pathname === route}
							onClick={() => navigate(route)}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									mr: isOpened ? 1 : 'auto',
									justifyContent: 'center'
								}}
							>
								<Icon baseClassName="fi" className={icon} color="primary" />
							</ListItemIcon>
							<ListItemText
								primary={literal}
								sx={{ opacity: isOpened ? 1 : 0 }}
								primaryTypographyProps={{
									color: 'primary',
									variant: 'paragraph'
								}}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<div
				style={{
					borderTop: '1px solid',
					borderColor: theme.palette.grey[200]
				}}
			>
				<List sx={{ padding: '0px' }}>
					{navListCommon.map(({ literal, route, icon, actionType }) => (
						<ListItem key={literal} disablePadding sx={{ display: 'block' }}>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: isOpened ? 'initial' : 'center',
									px: 2
								}}
								selected={pathname === route}
								onClick={() => {
									switch (actionType) {
										case actionTypes.logout:
											handleLogout()
											break

										default:
											break
									}
									if (route) {
										navigate(route)
									}
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: isOpened ? 1 : 'auto',
										justifyContent: 'center'
									}}
								>
									<Icon baseClassName="fi" className={icon} color="primary" sx={{ width: 14, height: 14 }} />
								</ListItemIcon>
								<ListItemText
									primary={literal}
									sx={{ opacity: isOpened ? 1 : 0 }}
									primaryTypographyProps={{
										color: 'primary',
										variant: 'paragraph'
									}}
								/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<List sx={{ padding: '0px', borderTop: '1px solid', borderColor: theme.palette.grey[200] }}>
					<ListItem disablePadding sx={{ display: 'block' }}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: isOpened ? 'flex-end' : 'center',
								px: 2
							}}
							onClick={() => toggleIsOpened(!isOpened)}
						>
							<ListItemIcon
								color="primary"
								sx={{
									minWidth: 0,
									justifyContent: 'center',
									color: theme.palette.primary.main
								}}
							>
								{isOpened ? (
									<Iconify color="primary" icon="ri:indent-decrease" sx={{ width: 24, height: 24, padding: '3px' }} />
								) : (
									<Iconify
										color="primary"
										hFlip={true}
										icon="ri:indent-decrease"
										sx={{ width: 24, height: 24, padding: '3px' }}
									/>
								)}
							</ListItemIcon>
						</ListItemButton>
					</ListItem>
				</List>
			</div>
		</div>
	)
}

export default Sidebar
