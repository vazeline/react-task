import React from 'react'
import { Navigate } from 'react-router-dom'
import { Login } from '../pages/auth/Login'
import { DashboardLayout } from '../layouts/dashboard'
import { AuthLayout } from '../layouts/AuthLayout'
import { UserProfile } from '../pages/user/UserProfile'

import { Register } from '../pages/auth/Register'
import { User } from '../features/user/models'
import { TransactionManagement } from '../pages/transaction/TransactionManagement'
import { CreateTransactionForm } from '../pages/transaction/CreateTransactionForm'

const routes = (isLoggedIn: User | string | null) => [
	{
		path: '/dashboard',
		element: isLoggedIn ? <DashboardLayout /> : <Navigate to="/auth/login" />,
		children: [
			{ path: 'transaction/create', element: <CreateTransactionForm /> },
			{ path: 'transaction', element: <TransactionManagement /> },
			{ path: 'profile', element: <UserProfile /> },
			{ path: '*', element: <Navigate to="transaction" replace /> }
		]
	},
	{
		path: '/auth',
		element: !isLoggedIn ? <AuthLayout /> : <Navigate to="/dashboard/transaction" />,
		children: [
			{ path: 'login', element: <Login /> },
			{ path: 'register', element: <Register /> },
			{ path: '*', element: <Navigate to="login" replace /> }
		]
	},
	{ path: '*', element: <Navigate to="auth/login" replace /> }
]

export { routes }
