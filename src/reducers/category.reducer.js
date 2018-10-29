import {
  GET_CAT_REQUEST,
  GET_CAT_SUCCESS,
  GET_CAT_FAIL   
} from '../actions/category.action';
  
  const initialState = {
    category: [{
        id: '',
        title: '',
        description: '',
        selected: false
    }],
  }
  
  export function categoryReducer (state=initialState, action){
    switch (action.type){
      case GET_CAT_REQUEST:
      return {
        ...state,
        selected: false
      }
      case GET_CAT_SUCCESS:
      localStorage.setItem('title', action['payload']);
      return {
        ...state,
        selected: true
      }
      case GET_CAT_FAIL:
      return{
        ...state,
        selected: false
      }
      default: return state
    }
  }