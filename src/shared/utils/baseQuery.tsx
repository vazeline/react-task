import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { clearCredentials } from '../../features/user/authSlice'
import { prepareTokenInHeaders } from './prepareTokenInHeaders'
import { logout } from '../../features/user/userSlice'
import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes'

const baseQuery = (baseUrl: string) =>
	fetchBaseQuery({
		baseUrl: baseUrl,
		prepareHeaders: prepareTokenInHeaders
	})

const baseQueryWithReAuth =
	({ baseUrl }: { baseUrl: string }) =>
	async (args: any, api: BaseQueryApi, extraOptions: any) => {
		const result = await baseQuery(baseUrl)(args, api, extraOptions)

		if (result?.error?.status === 401) {
			api.dispatch(logout())
			api.dispatch(clearCredentials())
		}

		return result
	}

export { baseQueryWithReAuth }
