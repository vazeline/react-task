import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReAuth } from '../../shared/utils/baseQuery'
import { clearCredentials } from './authSlice'
import { User, TransactionsResponse, CreateTransaction, TransToken, UserList, UserFilter, UserResponse } from './models'
import { logout, setUser } from './userSlice'
import { setCredentials } from './authSlice'
import {
	LoginRequest,
	LoginResponse,
	RegisterRequest,
	RegisterResponse
} from './models'

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string
const thelogout = async (arg: any, api: any): Promise<any> => {
	try {
		await api.queryFulfilled
	}
	catch(error:any){
		if(error.error.originalStatus === 401){
			api.dispatch(logout())
			api.dispatch(clearCredentials())
		}
		console.error(error)
	}
}

const userApi: any = createApi({
	reducerPath: 'userApi',
	baseQuery: baseQueryWithReAuth({
		baseUrl: `${BASE_URL}/`
	}),
	tagTypes: ['User','UserTransactions','UsersList','UserInfo'],
	endpoints: (builder) => ({
		getUserTransactions: builder.query<TransactionsResponse, void>({
			query() {
				return {
					url: 'api/protected/transactions',
					method: 'GET'
				}
			},
			providesTags:['UserTransactions'],
			async onQueryStarted(args, {dispatch, queryFulfilled}){
				await thelogout(args, { dispatch, queryFulfilled })
			}
		}),
		createTransaction: builder.mutation<TransToken, CreateTransaction>({
			query(data) {
				return {
					url: 'api/protected/transactions',
					method: 'POST',
					body: data
				}
			},
			invalidatesTags:['UserTransactions','UserInfo'],
			async onQueryStarted(args, {dispatch, queryFulfilled}){
				await thelogout(args, { dispatch, queryFulfilled })
			}
		}),
		userInfo: builder.query<UserResponse, void>({
			query() {
				return {
					url: 'api/protected/user-info',
					method: 'GET'
				}
			},
			providesTags:['UserInfo'],
			async onQueryStarted(args, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled
					dispatch(setUser(data.user_info_token))
				} catch (error : any) {
					if(error.error.originalStatus === 401){
						dispatch(logout())
						dispatch(clearCredentials())
					}
					console.error(error)
				}
			}
		}),
		usersList: builder.query<UserList, UserFilter>({
			query(data) {
				return {
					url: 'api/protected/users/list',
					method: 'POST',
					body: data
				}
			},
			providesTags:['UsersList'],
			async onQueryStarted(args, {dispatch, queryFulfilled}){
				await thelogout(args, { dispatch, queryFulfilled })
			}
		}),
		registerUser: builder.mutation<RegisterResponse, RegisterRequest>({
			query(data) {
				return {
					url: 'users',
					method: 'POST',
					body: data
				}
			},
			invalidatesTags:['User','UserTransactions','UserInfo'],
			async onQueryStarted(args, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled
					dispatch(setCredentials({user: args.username, accessToken: data.id_token}))
				} catch (error) {
					console.error(error)
				}
			}
		}),
		loginUser: builder.mutation<LoginResponse, LoginRequest>({
			query(data) {
				return {
					url: 'sessions/create',
					method: 'POST',
					body: data,
					credentials: 'include'
				}
			},
			invalidatesTags:['User','UserTransactions','UserInfo'],
			async onQueryStarted(args, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled
					dispatch(setCredentials({user: args.email, accessToken: data.id_token}))
				} catch (error) {
					console.error(error)
				}
			}
		})
	})
})

export const { useGetUserTransactionsQuery, useCreateTransactionMutation, useUserInfoQuery, useUsersListQuery,useLoginUserMutation,useRegisterUserMutation, } = userApi

export { userApi }
