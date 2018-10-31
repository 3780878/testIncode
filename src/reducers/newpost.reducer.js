import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAIL  
} from '../actions/newpost.action';

  
  export function newpostReducer(action) {
    switch (action.type) {  
      case ADD_POST_REQUEST:
        return {
						...state
						///
        }
  
      case ADD_POST_SUCCESS:
        return {
						...state
						////
        }
  
      case ADD_POST_FAIL:
        return { 
					...state
					///
      }
  
      default:
        return state
    }
  }


  import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
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