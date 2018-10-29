import {
  GET_CAT_REQUEST,
  GET_CAT_SUCCESS,
  GET_CAT_FAIL   
} from '../actions/category.action';
  
  const initialState = {
    categories: [],
    loaded: false
  }
  
  export function categoryReducer (state=initialState, action){
    switch (action.type){
      case GET_CAT_REQUEST:
        return {
          ...state,
          loaded: false
        }
      case GET_CAT_SUCCESS:
      
        return {
          ...state,
          loaded: true,
          categories: action.payload
        }
      case GET_CAT_FAIL:
        return{
          ...state,
          loaded: false,
          categories: []    
        }
      default: return state
    }
  }