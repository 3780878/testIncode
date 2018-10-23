import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../actions/UserAction';

  
  const initialState = {
    isValid:      true,
    isSubmitting: false,
    hasChanges:   false,
    error:        ''
  }
  
  export function userReducer(state = initialState, action) {
    switch (action.type) {  
      case LOGIN_REQUEST:
        return {
            ...state,            
            isSubmitting: true
        }
  
      case LOGIN_SUCCESS:
        localStorage.setItem('token', action['payload']);

        return {
            ...state,
            isValid: true,            
            isSubmitting: false,
            hasChanges: false
        }
  
      case LOGIN_FAIL:
        return { ...state, isValid: false, error: '', isSubmitting: true, hasChanges: false }
  
      default:
        return state
    }
  }