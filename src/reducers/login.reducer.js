import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from '../actions/auth.action';
  
  const initialState = {
    isValid:      true,
    isSubmitting: false,
    hasChanges:   false,
    error:        ''
  }
  
  export function loginReducer(state = initialState, action) {
    switch (action.type) {  
      case LOGIN_REQUEST:
        return {
            ...state,            
            isSubmitting: true
        }
  
      case LOGIN_SUCCESS:
        return {
            ...state,
            isValid: true,            
            isSubmitting: false,
            hasChanges: false
        }
  
      case LOGIN_FAIL:
        return { 
          ...state,
          isValid: false, 
          isSubmitting: true
      }
  
      default:
        return state
    }
  }