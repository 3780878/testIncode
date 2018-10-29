import {
    GET_POST_REQUEST,
    GET_POST_SUCCESS,
    GET_POST_FAIL
} from '../actions/post.action';
  
  const initialState = {
    isSubmitting: false
  }
  
  export function postReducer(state = initialState, action) {
    switch (action.type) {  
      case GET_POST_REQUEST:
        return {
            ...state,            
            isSubmitting: true
        }
  
      case GET_POST_SUCCESS:
        return {
            ...state
        }
  
      case GET_POST_FAIL:
        return { 
          ...state,
          isSubmitting: false
      }
  
      default:
        return state
    }
  }