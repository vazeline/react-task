// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// TODO Fix this problem with eslint and types
import React, { useEffect, useState } from 'react'
import { DashboardPage } from '../../shared/hoc/DashboardPage'
import { useTheme } from '@mui/material/styles'
import { Typography, Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useUserInfoQuery } from '../../features/user/userApi'
import { useAppSelector } from '../../shared/hooks/redux'

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string

const UserProfile = () => {
	const theme = useTheme()
	const navigate = useNavigate()

	const {isLoading, data: userData } = useUserInfoQuery()

	const user = useAppSelector((state) => state.user.user)

	const userAvatar = user?.imageId ? `${BASE_URL}/api/image/${user?.imageId}` : 'url(/EmptyAvatar.png)'

	const linkList = [
		{ title: 'Home', route: '/dashboard' },
		{
			title: 'Profile',
			route: '/dashboard/profile'
		}
	]

	return (
		<DashboardPage title="My Profile" goBackRoute="/dashboard/device-profile" linkList={linkList}>
			{isLoading ? (
				<>Loading</>
			) : (
				<Paper
					variant="secondary"
					sx={{
						marginTop: '20px',
						marginLeft: '20px',
						marginRight: '20px',
						padding: '40px'
					}}
				>
					<div
						style={{
							display: 'grid',
							gap: '30px',
							gridTemplateAreas: '"Photo Text Data"',
							justifyContent: 'start'
						}}
					>
						<div
							style={{
								gridArea: 'Photo',
								display: 'grid',
								height: '100%',
								borderRadius: '5px',
								overflow: 'hidden'
							}}
						>
							{user?.imageId ? (
								<img
									src={`${BASE_URL}/api/image/${user?.imageId}`}
									style={{
										width: '170px',
										height: '170px',
										alignSelf: 'center',
										justifySelf: 'center'
									}}
								></img>
							) : (
								<div
									style={{
										width: '170px',
										height: '170px',
										background: userAvatar + '50% 50% no-repeat',
										alignSelf: 'center',
										justifySelf: 'center'
									}}
								></div>
							)}
						</div>
						<div
							style={{
								gridArea: 'Text',
								display: 'flex',
								flexDirection: 'column',
								marginRight: '70px',
								justifyContent: 'space-between'
							}}
						>
							<div>
								<Typography sx={{ textAlign: 'start' }} variant="h5">
									{user?.name}
								</Typography>
								<Typography
									sx={{
										textAlign: 'start',
										margin: '10px 0px 0px 0px',
										color: theme.palette.grey[400]
									}}
									paragraph={true}
								>
									{user?.email}
								</Typography>
								<Typography
									sx={{
										textAlign: 'start',
										margin: '6px 0px 0px 0px',
										color: theme.palette.grey[400]
									}}
									paragraph={true}
								>
									{user?.balance}
								</Typography>
							</div>
						</div>
						<ul
							style={{
								gridArea: 'Data',
								display: 'flex',
								flexDirection: 'column',
								listStyle: 'none',
								margin: '0px',
								padding: '0px'
							}}
						>
							<li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
								<Typography
									sx={{
										marginBottom: '0px',
										textDecorationLine: 'underline',
										color: theme.palette.primary.main
									}}
									paragraph={true}
								>
									Privacy Policy
								</Typography>
							</li>
							<li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
								<Typography
									sx={{
										marginBottom: '0px',
										textDecorationLine: 'underline',
										color: theme.palette.primary.main
									}}
									paragraph={true}
								>
									Terms of Use
								</Typography>
							</li>
						</ul>
					</div>
				</Paper>
			)}
		</DashboardPage>
	)
}

export { UserProfile }
