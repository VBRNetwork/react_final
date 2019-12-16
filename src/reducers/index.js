import user from './user'
import { routerReducer} from 'connected-next-router'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import settings from './settings'
import register_user from './register_user'
import members from './members'

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user','settings','members','router']
};

const combinedReducers = combineReducers({ user,register_user, members,settings,router: routerReducer,});
export default persistReducer(persistConfig, combinedReducers);
