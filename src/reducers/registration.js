import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/registerAction';
  
  const initialState = {
    isValid:      true,
    isSubmitting: false,
    hasChanges:   false,
    error:        ''
  }
  
  export function registerReducer(state = initialState, action) {
    switch (action.type) {  
      case REGISTER_REQUEST:
        return {
            ...state,            
            isSubmitting: true
        }
  
      case REGISTER_SUCCESS:
        localStorage.setItem('token', action['payload']);
        return {
            ...state,
            isValid: true,            
            isSubmitting: false,
            hasChanges: false
        }
  
      case REGISTER_FAIL:
        return { 
          ...state,
          isValid: false, 
          isSubmitting: true
      }
  
      default:
        return state
    }
  }