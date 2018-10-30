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