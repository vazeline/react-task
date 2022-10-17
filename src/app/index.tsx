import React from 'react'
import { ThemeProvider } from './theme/index'
import { routes } from './routes'
import { useAuth } from '../features/user/useAuth'
import { useRoutes } from 'react-router-dom'

function App() {
	const auth = useAuth()

	const routing = useRoutes(routes(auth.user))

	return <ThemeProvider>{routing}</ThemeProvider>
}

export { App }
