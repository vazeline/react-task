import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from './models'

interface UserState {
	user: User | null
}

const initialState: UserState = {
	user: null
}

const userSlice = createSlice({
	initialState,
	name: 'userSlice',
	reducers: {
		logout: () => initialState,
		setUser: (state, action: PayloadAction<User>) => {
			state.user = action.payload
		}
	}
})

export { userSlice }

export const { logout, setUser } = userSlice.actions
