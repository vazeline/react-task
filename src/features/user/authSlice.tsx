import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from './models'

type AuthState = {
	user: User | string | null
	token: string | null
}

const authSlice = createSlice({
	name: 'auth',
	initialState: { user: null, token: null } as AuthState,
	reducers: {
		setCredentials: (state, { payload: { user, accessToken } }: PayloadAction<{ user: User | string; accessToken: string }>) => {
			state.user = user
			state.token = accessToken
		},
		clearCredentials: (state) => {
			state.user = null
			state.token = null
		}
	}
})

export const { setCredentials, clearCredentials } = authSlice.actions

export { authSlice }
