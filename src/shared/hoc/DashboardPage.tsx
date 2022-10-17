import React from 'react'
import { Breadcrumbs, Grid, Link, Paper } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Iconify } from '../components/Iconify'

type LinkItem = {
	title: string
	route: string
}

const DashboardPage = ({ children, linkList, title, goBackRoute }: any) => {
	return (
		<>
			<Paper square={true} sx={{ display: 'grid' }}>
				<Breadcrumbs
					sx={{
						marginLeft: '24px',
						marginTop: '12px'
					}}
					aria-label="breadcrumb"
				>
					{linkList ? (
						linkList.map((linkItem: LinkItem) => (
							<Link key={linkItem.title} href={linkItem.route}>
								{linkItem.title}
							</Link>
						))
					) : (
						<Link href="/dashboard">{'Home'}</Link>
					)}
				</Breadcrumbs>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: '100px 300px',
						gridTemplateRows: '1fr',
						gap: '0px 0px',
						gridTemplateAreas: '"Photo Text"'
					}}
				>
					<Grid
						sx={{ marginLeft: '25px', width: '400px' }}
						container
						direction={'row'}
						alignItems={'center'}
						justifyItems={'center'}
					>
						<Grid item xs={2}>
							{goBackRoute && (
								<Link href={goBackRoute}>
									<Iconify
										sx={{
											fontSize: '24px'
										}}
										width={22}
										height={22}
										icon="eva:arrow-back-fill"
									/>
								</Link>
							)}
						</Grid>
						<Grid item xs={6}>
							<Typography
								sx={{
									display: 'grid',
									placeSelf: 'start',
									marginLeft: '24px',
									marginTop: '24px',
									marginBottom: '30px',
									fontSize: '18px',
									fontWeight: '500',
									width: '100%',
									justifyItems: 'start'
								}}
							>
								{title && title}
							</Typography>
						</Grid>
					</Grid>
				</div>
			</Paper>

			{children}
		</>
	)
}

export { DashboardPage }
