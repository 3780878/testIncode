import { combineReducers } from 'redux';
import { rootReducer } from './root.reducer';
import { loginReducer } from './login.reducer';
import { registerReducer } from './registration.reducer';

export const appReducer = combineReducers({
  root: rootReducer,
  login: loginReducer,
  register: registerReducer
})