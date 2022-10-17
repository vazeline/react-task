import React, { useEffect,useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Avatar from '@mui/material/Avatar'
import Container from '@mui/material/Container'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux'
import { logout, setUser } from '../../../features/user/userSlice'
import { clearCredentials } from '../../../features/user/authSlice'
import { Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useUserInfoQuery } from '../../../features/user/userApi'
import { User } from '../../../features/user/models'


const Header = () => {
	const theme = useTheme()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

	const [user, setUserState] = useState<User | undefined | null>(useAppSelector((state) => state.user.user))

	const { data: userInfo } = useUserInfoQuery(/*undefined,{skip: !user === false}*/)
	useEffect(() => {
		if (userInfo?.user_info_token) {
			setUser(userInfo?.user_info_token)
			setUserState(userInfo?.user_info_token)
		}
	}, [userInfo])

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleClickUserProfile = () => {
		setAnchorElUser(null)
		navigate('/dashboard/profile')
	}

	const handleLogout = () => {
		setAnchorElUser(null)
		dispatch(logout())
		dispatch(clearCredentials())
		navigate('/auth/login')
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	return (
		<AppBar position="static" sx={{ backgroundColor: '#001340' }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} />
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />
					<Box sx={{ flexGrow: 0 }}>
						<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar src='/static/images/avatar/2.jpg' />
						</IconButton>
						<Menu
							sx={{ mt: '45px', px: '10px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right'
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right'
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							<MenuItem onClick={handleClickUserProfile}>Profile</MenuItem>
							<MenuItem onClick={handleLogout}>Logout</MenuItem>
						</Menu>

					</Box>
					<Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'flex' } }} >
					<div style={{
								gridArea: 'Text',
								display: 'flex',
								flexDirection: 'column',
								marginLeft: '15px',
								justifyContent: 'space-between',
								padding: '0px' 
							}}>
							<div style={{display:'inline'}}>
								<Typography sx={{ textAlign: 'start' ,
										margin: '6px 0px 0px 0px',
										color: theme.palette.grey[400] }} variant="h5">
									{user?.name}
								</Typography>
								<Typography
									sx={{
										textAlign: 'start',
										margin: '6px 0px 0px 0px',
										color: theme.palette.grey[400]
									}}
									paragraph={true}>
									{user?.balance}
								</Typography>
							</div>
						</div> 
						</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export { Header }
