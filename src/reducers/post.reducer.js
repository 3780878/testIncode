import {
    GET_POST_REQUEST,
    GET_POST_SUCCESS,
    GET_POST_FAIL
} from '../actions/post.action';
  
  const initialState = {
    loaded: false,
    posts: []
  }
  
  export function postReducer(state = initialState, action) {
    switch (action.type) {  
      case GET_POST_REQUEST:
        return {
            ...state,            
            loaded: false
        }
  
      case GET_POST_SUCCESS:
        return {
            ...state,
            loaded: true,
            posts: action.payload
        }
  
      case GET_POST_FAIL:
        return { 
          ...state,
          loaded: false,
          posts: []
      }
  
      default:
        return state
    }
  }