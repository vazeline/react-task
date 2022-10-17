import React from 'react'
import { Box, Breadcrumbs, Card, Link } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Iconify } from '../components/Iconify'
import AddIcon from '@mui/icons-material/Add'
import { Link as RouterLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'

type LinkItem = {
	title: string
	route: string
}

const DashboardTablePage = ({ children, linkList, title, goBackRoute, addNewRoute }: any) => {
	return (
		<>
			<Card sx={{ display: 'grid' }}>
				<Breadcrumbs
					sx={{
						marginLeft: '24px',
						marginTop: '12px'
					}}
					aria-label="breadcrumb"
				>
					{linkList
						? linkList.map((linkItem: LinkItem) => (
								<Link key={linkItem.title} href={linkItem.route}>
									{linkItem.title}
								</Link>
								// eslint-disable-next-line no-mixed-spaces-and-tabs
						  ))
						: null}
				</Breadcrumbs>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center'
					}}
				>
					{goBackRoute && (
						<Link href={goBackRoute}>
							<Iconify
								sx={{
									fontSize: '24px',
									marginTop: '30px'
								}}
								width={22}
								height={22}
								icon="eva:arrow-back-fill"
							/>
						</Link>
					)}

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
						{Boolean(title) && title}
					</Typography>
					<Box sx={{ display: 'flex', flexDirection: 'row' }}>
						<RouterLink style={{ justifySelf: 'end', marginRight: '20px' }} to={addNewRoute}>
							<AddIcon />
						</RouterLink>
					</Box>
				</div>
			</Card>

			<Box>{children}</Box>
		</>
	)
}

export { DashboardTablePage }
