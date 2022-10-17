type User = {
	id: number
	name: string
	email: string
	balance?: number | null
}
type UserResponse = {
	user_info_token: User
}

type TransToken = {

	id:number, 
	date:Date, 
	username:string, 
	amount:number, 
	balance:number
	
}
type TransactionsResponse = {
	trans_token: TransToken[]
}

type CreateTransaction = {
	name: string,
	amount: number
}

type UserFilter = {
	filter: string
}

type UserList = { id: number, name: string }[]
type LoginRequest = {
	username: string
	email: string
	password: string
}

type LoginResponse = {
	id_token: string
}


type RegisterRequest = {
	email: string
	username: string
	password: string
}

type RegisterResponse = {
	id_token: string
}

export type {
	LoginRequest,
	LoginResponse,
	RegisterRequest,
	RegisterResponse
}

export type { User, UserResponse, TransactionsResponse, CreateTransaction, TransToken, UserFilter, UserList }
