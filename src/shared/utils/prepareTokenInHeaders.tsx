import { RootState } from '../../app/store'

const prepareTokenInHeaders = (headers: any, { getState }: any) => {
	const token = (getState() as RootState).auth.token

	if (token) {
		headers.set('authorization', `Bearer ${token}`)
	}

	return headers
}

export { prepareTokenInHeaders }
