import React, { useState } from 'react'
import { Box, Grid, TablePagination, Checkbox } from '@mui/material'
import { DashboardTablePage } from '../../shared/hoc/DashboardTablePage'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import { useGetUserTransactionsQuery } from '../../features/user/userApi'
import { EmptyTableList } from './components/EmptyTableList'
import { useNavigate } from 'react-router-dom'
//import { dateFormat } from '../../shared/utils/data'
import { TransToken } from '../../features/user/models'

const linkList = [{ title: 'Transaction Management', route: '/dashboard/transaction' }]

const TransactionManagement = () => {
	const navigate = useNavigate()
	const { error, isLoading, data: data } = useGetUserTransactionsQuery()

	return (
		<DashboardTablePage title="Transaction Management" linkList={linkList} addNewRoute={'/dashboard/transaction/create'}>
			{!isLoading ? (
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						padding: '50px',
						height: '100%',
						width: '100%'
					}}
				>
					<div>
						{data?.trans_token?.length ? (
							<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
								<TableContainer component={Paper}>
									<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
										<TableHead sx={{ height: '60px', backgroundColor: '#59CBE8' }}>
											<TableRow>
												<TableCell style={{ color: 'white' }}>Id</TableCell>
												<TableCell style={{ color: 'white' }} align="left">
													User Name
												</TableCell>
												<TableCell style={{ color: 'white' }} align="left">
													Amount sent
												</TableCell>
												<TableCell style={{ color: 'white' }} align="left">
													Amount left
												</TableCell>
												<TableCell style={{ color: 'white' }} align="right"></TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{data?.trans_token?.map((transactionItem: TransToken) => (
												<TableRow
													onClick={() => {
														navigate(`/dashboard/transaction/${transactionItem.id}`)
													}}
													key={transactionItem.id}
													sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
												>
													<TableCell style={{ width: '250px' }}>{transactionItem.id}</TableCell>
													<TableCell align="left">{transactionItem.username}</TableCell>
													<TableCell align="left">{transactionItem.amount}</TableCell>
													<TableCell align="left">{transactionItem.balance}</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</TableContainer>
							</Grid>
						) : (
							<EmptyTableList />
						)}
					</div>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'flex-end',
							alignItems: 'center'
						}}
					>
					</Box>
				</Box>
			) : (
				<div>Loading...</div>
			)}
		</DashboardTablePage>
	)
}

export { TransactionManagement }
