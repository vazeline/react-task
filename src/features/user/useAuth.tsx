import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'

const selectCurrentUser = (state: RootState) => state.auth.user

export const useAuth = () => {
	const user = useSelector(selectCurrentUser)

	return useMemo(() => ({ user }), [user])
}
