import {
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
  GET_ALL_POSTS_BY_AUTHOR_ID_REQUEST,
  GET_ALL_POSTS_BY_AUTHOR_ID_SUCCESS,
  GET_ALL_POSTS_BY_AUTHOR_ID_FAIL,
  GET_POST_BY_CATEGORY_REQUEST,
  GET_POST_BY_CATEGORY_SUCCESS,
  GET_POST_BY_CATEGORY_FAIL,
  GET_POST_BY_ID_REQUEST,
  GET_POST_BY_ID_SUCCESS,
  GET_POST_BY_ID_FAIL,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAIL,
  DELETE_POST_REQUEST,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAIL
} from '../actions/post.action';
  
  const initialState = {
    loaded: false,
    posts: [],
    selectedCategory: null,
    selectedAuthor: null,
    selectedPost: null,
    isSubmit: false
  }

  export function postReducer(state = initialState, action) {
    switch (action.type) {  
      case GET_POST_REQUEST: {
        return {
          ...state,            
          loaded: false,
          selectedCategory: null,
          selectedAuthor: null
        }
      }

      case GET_POST_SUCCESS: 
      case GET_ALL_POSTS_BY_AUTHOR_ID_SUCCESS:
      case GET_POST_BY_CATEGORY_SUCCESS:
      case GET_POST_BY_ID_SUCCESS:{
        return {
          ...state,
          loaded: true,
          posts: action.payload
        }
      }

      case GET_POST_FAIL:
      case GET_POST_BY_CATEGORY_FAIL: 
      case GET_POST_BY_ID_FAIL: 
      case GET_ALL_POSTS_BY_AUTHOR_ID_FAIL: {
        return { 
          ...state,
          loaded: false,
          posts: []
        }
      }
      
      case GET_POST_BY_CATEGORY_REQUEST:
        return {
          ...state,
          loading: true,
          selectedCategory: action.payload,
          selectedAuthor: null
      };
    
      case GET_POST_BY_ID_REQUEST:
        return {
          ...state,
          loading: true,
          selectedPost: action.payload
      };

      case GET_ALL_POSTS_BY_AUTHOR_ID_REQUEST:
        return {
          ...state,
          loading: true,
          selectedCategory: null,
          selectedAuthor: action.payload
      };
      case CREATE_POST_REQUEST:
        return {
          ...state,
          loading: true,
          isSubmit: false
      };
      case CREATE_POST_SUCCESS:
      case UPDATE_POST_SUCCESS:
      case DELETE_POST_SUCCESS:
        return {
          ...state,
          loading: false,
          isSubmit: true
        };
      case CREATE_POST_FAIL:
      case UPDATE_POST_FAIL:
      case DELETE_POST_FAIL:
        return {
          ...state,
          loading: false,
          isSubmit: false
        };
      case UPDATE_POST_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
        
      case DELETE_POST_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      
      default:
        return state
    }
  }