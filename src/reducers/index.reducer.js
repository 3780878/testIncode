import { combineReducers } from 'redux';
import { rootReducer } from './root.reducer';
import { loginReducer } from './login.reducer';
import { registerReducer } from './registration.reducer';
import { categoryReducer } from './category.reducer';
import { postReducer } from './post.reducer';

export const appReducer = combineReducers({
  root: rootReducer,
  login: loginReducer,
  register: registerReducer,
  category: categoryReducer,
  post: postReducer
})