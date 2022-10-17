import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage'
import { authSlice } from '../../features/user/authSlice'
import { userApi } from '../../features/user/userApi'
import { userSlice } from '../../features/user/userSlice'

const authPersistConfig = {
	key: 'root',
	storage,
	blacklist: ['authError']
}

const rootReducer = combineReducers({
	auth: persistReducer(authPersistConfig, authSlice.reducer),
	user: userSlice.reducer,
	[userApi.reducerPath]: userApi.reducer,
//	[userApi.reducerPath]: userApi.reducer,
})

const middlewareList = [userApi.middleware]

const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		devTools: process.env.NODE_ENV === 'development',
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(middlewareList)
	})
}

const store = setupStore()
const persistor = persistStore(store)

type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']

export { store, persistor }
export type { RootState, AppStore, AppDispatch }
