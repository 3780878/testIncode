import { combineReducers } from 'redux';
import { appReducer } from './app';
import { loginReducer } from './login';
import { registerReducer } from './registration';

export const rootReducer = combineReducers({
  app: appReducer,
  login: loginReducer,
  register: registerReducer
})