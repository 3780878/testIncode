import { combineReducers } from 'redux';
import { appReducer } from './app';
import { loginReducer } from './login';

export const rootReducer = combineReducers({
  app: appReducer,
  login: loginReducer,
})