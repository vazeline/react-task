import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const EmptyTableList = () => {
	const navigate = useNavigate()

	return (
		<div
			style={{
				display: 'grid',
				alignItems: 'center',
				width: '100%',
				height: '63vh'
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					margin: 'auto'
				}}
			>
				<Typography> You don’t have any transactions in this profile yet!</Typography>
				<Typography>Go ahead and add one now!</Typography>
				<Box
					sx={{
						marginTop: '50px'
					}}
				>
					<Button sx={{ width: '344px' }} variant="contained" onClick={() => navigate('/dashboard/transaction/create')}>
						Create new transaction
					</Button>
				</Box>
			</Box>
		</div>
	)
}

export { EmptyTableList }
