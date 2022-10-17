import React from 'react'
import { Grid, useMediaQuery } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { styled, useTheme } from '@mui/material/styles'

const AuthLayout = () => {
	const theme = useTheme()
	const mq = useMediaQuery(theme.breakpoints.up('sm'))
	return (
		<>
			<Grid sx={{ minHeight: '100vh', maxHeight: '100vh' }} container>
				<Grid item sx={{ width: '100%', height: '100vh' }}>
					<Outlet />
				</Grid>
			</Grid>
		</>
	)
}

export { AuthLayout }
