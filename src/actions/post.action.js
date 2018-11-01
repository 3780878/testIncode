import axios from '../axios';

export const GET_POST_REQUEST = '[Post] Get Post Request'
export const GET_POST_SUCCESS = '[Post] Get Post Success'
export const GET_POST_FAIL    = '[Post] Get Post Fail'

export const GET_ALL_POSTS_BY_AUTHOR_ID_REQUEST = '[Post] Get Find Post Request'
export const GET_ALL_POSTS_BY_AUTHOR_ID_SUCCESS = '[Post] Get Find Post Success'
export const GET_ALL_POSTS_BY_AUTHOR_ID_FAIL    = '[Post] Get Find Post Fail'

export const GET_POST_BY_ID_REQUEST = '[Post] Get Post By Id Request';
export const GET_POST_BY_ID_SUCCESS = '[Post] Get Post By Id Success';
export const GET_POST_BY_ID_FAIL = '[Post] Get Post By Id Fail';

export const GET_POST_BY_CATEGORY_REQUEST = '[Posts By Category] Get Post By Category ID Request';
export const GET_POST_BY_CATEGORY_SUCCESS = '[Posts By Category] Get Post By Category ID Success';
export const GET_POST_BY_CATEGORY_FAIL = '[Posts By Category] Get Post By Category ID Fail';

export const CREATE_POST_REQUEST = '[Create Post] Post Create Request';
export const CREATE_POST_SUCCESS = '[Create Post] Post Create Success';
export const CREATE_POST_FAIL = '[Create Post] Post Create Fail';

export const DELETE_POST_REQUEST = '[Delete Post] Post Delete Request';
export const DELETE_POST_SUCCESS = '[Delete Post] Post Delete Success';
export const DELETE_POST_FAIL = '[Delete Post] Post Delete Fail';

export const UPDATE_POST_REQUEST = '[Update Post] Post Update Request';
export const UPDATE_POST_SUCCESS = '[Update Post] Post Update Success';
export const UPDATE_POST_FAIL = '[Update Post] Post Update Fail';

export const SWITCH_POST_TO_UPDATE_MODE = '[Update Post Mode] SWITCH_POST_TO_UPDATE_MODE';

export const addNewPostCreator = (postData, userId) => {
  return (dispatch) => {
    dispatch({
      type: CREATE_POST_REQUEST,
      payload: postData
    });
    axios.post('/post', postData, {
      headers: {
        Authorization : `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((response)=> {
      localStorage.setItem('post', response.data.post);
      dispatch({
        type: CREATE_POST_SUCCESS,
        payload: response.data.post
      });
      dispatch(getPostsOfUser(userId))
    })
    .catch((error) => {
      dispatch({
        type: CREATE_POST_FAIL,
        payload: 'Ooops..Something went wrong again'
      })
    })
  }
}
export const deletePost = (id, userId) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_POST_REQUEST,
      payload: {}
    });
  axios.delete(`/post/${id}`)
    .then((response) => {
      localStorage.removeItem('post')

      dispatch({
        type: DELETE_POST_SUCCESS,
        payload: response.data.data,
    });
    dispatch(getPostsOfUser(userId))
    })
    .catch((err) => {
      dispatch({
        type: DELETE_POST_FAIL,
        payload: 'Oooops.. I did it again'
      })
  })
}  
}
export const updatePost = (postData, id) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_POST_REQUEST
    });
    axios.put(`/post/${id}`, postData)
      .then((response) => {
        dispatch({
          type: UPDATE_POST_SUCCESS,
          payload: response.data.data
        })
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_POST_FAIL,
          payload: 'Wrong way'
        })
      })
  }
}

export const getPosts = () => {       
	return (dispatch) => {

		dispatch({
			type: GET_POST_REQUEST
		});

		axios.get('/post')
			.then((response) => {
					dispatch({
						type: GET_POST_SUCCESS,
						payload: response.data.data
					})
			}) 
			.catch((error) => {
				dispatch({
					type: GET_POST_FAIL,
					payload: 'OOps..Something went wrong'
				})
			}) 
	}
}

export const switchPostToUpdateMode = (id) => dispatch => {
  dispatch({
    type : SWITCH_POST_TO_UPDATE_MODE,
    payload : id
  })
}

export const getPostsOfUser = (id) => {
	return (dispatch) => {
		
		dispatch({
				type: GET_ALL_POSTS_BY_AUTHOR_ID_REQUEST
		});
				
    axios.get(`/post/author/${id}`)
    
			.then((response) => {
				dispatch({
					type: GET_ALL_POSTS_BY_AUTHOR_ID_SUCCESS,
					payload: response.data.data
			 })
			}) 
			.catch((error) => {
					dispatch({
						type: GET_ALL_POSTS_BY_AUTHOR_ID_FAIL,
						payload: 'OOps..Something went wrong'
				 })
			})         
    }
}

const getPostByCategoryRequest = (category) => ({
	type: GET_POST_BY_CATEGORY_REQUEST,
	payload: category
  });
  
  const getPostByCategorySuccess = posts => ({
    type: GET_POST_BY_CATEGORY_SUCCESS,
    payload: posts,
  });
  
  const getPostByCategoryFail = error => ({
    type: GET_POST_BY_CATEGORY_FAIL,
    error,
  });
  
export const getPostsByCategory = category => (dispatch) => {
    dispatch(getPostByCategoryRequest(category));
    axios
      .get(`/post/category/${category.title}`)
      .then((response) => {
        dispatch(getPostByCategorySuccess(response.data.posts));
      })
      .catch((err) => {
        dispatch(getPostByCategoryFail(err));
      });
  };

  const getPostByIdRequest = () => ({
    type: GET_POST_BY_ID_REQUEST,
  });
  
  const getPostByIdSuccess = post => ({
    type: GET_POST_BY_ID_SUCCESS,
    post,
  });
  
  const getPostByIdFail = error => ({
    type: GET_POST_BY_ID_FAIL,
    error,
  });
  
  export const getPostById = id => (dispatch) => {
    dispatch(getPostByIdRequest());
    axios
      .get(`/post/${id}`)
      .then((response) => {
        dispatch(getPostByIdSuccess(response.data.data));
      })
      .catch((err) => {
        dispatch(getPostByIdFail(err));
      });
  };