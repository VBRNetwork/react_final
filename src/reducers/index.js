import user from './user'
import repos from './repos'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user']
};
const combinedReducers = combineReducers({ user,repos});
export default persistReducer(persistConfig, combinedReducers);
