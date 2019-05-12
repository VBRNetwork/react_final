import user from './user'
import { persistCombineReducers, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfigUser = {
  key: 'user',
  storage
}
const reducers = {
  user: persistReducer(persistConfigUser, user)
}

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user']
}

export default persistCombineReducers(persistConfig, reducers)
