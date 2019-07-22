import user from './user'
import register_user from './register_user'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import settings from './settings'

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user','settings']
};
const combinedReducers = combineReducers({ user,register_user, settings});
export default persistReducer(persistConfig, combinedReducers);
