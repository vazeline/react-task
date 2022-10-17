import React from 'react'
import { AuthPage } from '../../shared/hoc/AuthPage'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'
import { LoginForm } from './forms/LoginForm'

const RootStyle = styled('div')(({ theme }) => ({
	[theme.breakpoints.up('md')]: {
		display: 'flex'
	}
}))

const ContentStyle = styled('div')(({ theme }) => ({
	maxWidth: 480,
	margin: 'auto',
	minHeight: '100vh',
	display: 'flex',
	justifyContent: 'center',
	flexDirection: 'column',
	padding: theme.spacing(12, 0)
}))

const Login = () => {
	return (
		<>
			<AuthPage>
				<RootStyle>
					<Container maxWidth="sm">
						<ContentStyle>
							<LoginForm />
						</ContentStyle>
					</Container>
				</RootStyle>
			</AuthPage>
		</>
	)
}

export { Login }
