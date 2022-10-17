type navListItem = {
	literal: string
	route: string
	icon: string
}

const navList = [
	{
		literal: 'Transaction Management',
		route: '/dashboard/transaction',
		icon: 'fi-rr-chart-network'
	},
	{
		literal: 'User profile',
		route: '/dashboard/profile',
		icon: 'ant-design:user-outlined'
	},
]

const actionTypes = {
	logout: 'logout'
}

const navListCommon = [
	{
		literal: 'Log Out',
		icon: 'fi-rr-sign-out-alt',
		actionType: actionTypes.logout
	}
]

export type { navListItem }
export { navList, navListCommon, actionTypes }
