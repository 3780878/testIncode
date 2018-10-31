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
/*
const addNewPost = () => ({
  type: CREATE_POST_REQUEST,
});

const addNewPostSuccess = () => ({
  type: CREATE_POST_SUCCESS,
});

const addNewPostFail = error => ({
  type: CREATE_POST_FAIL,
  error,
});
*/
export const addNewPostCreator = (postData) => {
  debugger;
  return (dispatch) => {
    dispatch({
      type: CREATE_POST_REQUEST,
      payload: postData
    });
    axios.post('/post', postData)
    .then((response)=> {
      localStorage.setItem('post', response.data.post);
      dispatch({
        type: CREATE_POST_SUCCESS,
        payload: response.data.post
      })

     // dispatch(addNewPostSuccess(response.data));
     // dispatch(getPostsOfUser(authorId));
    })
    .catch((error) => {
      dispatch({
        type: CREATE_POST_FAIL,
        payload: 'Ooops..Something went wrong again'
      })
    })
  }
}
/*  title,
  body,
  authorId,
  authorName,
  categoryId,
  categoryName,
) => (dispatch) => {
  const postData = {
    title,
    body,
    author_id: authorId,
    author_name: authorName,
    category_id: categoryId,
    category_name: categoryName,
  };
  dispatch(addNewPost());
  axios
    .post('/post', postData)
    .then((response) => {
      dispatch(addNewPostSuccess(response.data));
      dispatch(getPostsOfUser(authorId));
    })
    .catch((err) => {
      dispatch(addNewPostFail(err));
    });
};
/*export const addNewPostCreator = (
  title,
  body,
  authorId,
  authorName,
  categoryId,
  categoryName,
) => (dispatch) => {
  const postData = {
    title,
    body,
    author_id: authorId,
    author_name: authorName,
    category_id: categoryId,
    category_name: categoryName,
  };
  dispatch(addNewPost());
  axios
    .post('/post', postData)
    .then((response) => {
      dispatch(addNewPostSuccess(response.data));
      dispatch(getPostsOfUser(authorId));
    })
    .catch((err) => {
      dispatch(addNewPostFail(err));
    });
};
*/
const deletePostRequest = () => ({
  type: DELETE_POST_REQUEST,
});

const deletePostSuccess = () => ({
  type: DELETE_POST_SUCCESS,
});

const deletePostFail = error => ({
  type: DELETE_POST_FAIL,
  error,
});

export const deletePost = (postId, authorId) => (dispatch) => {
  dispatch(deletePostRequest());
  axios
    .delete(`/post/${postId}`)
    .then((response) => {
      dispatch(deletePostSuccess(response.data.data));
    })
    .catch((err) => {
      dispatch(deletePostFail(err));
    });
};

const updatePostRequest = () => ({
  type: UPDATE_POST_REQUEST,
});

const updatePostSuccess = () => ({
  type: UPDATE_POST_SUCCESS,
});

const updatePostFail = error => ({
  type: UPDATE_POST_FAIL,
  error,
});

export const updatePosts = (
  postId,
  title,
  body,
  authorId,
  authorName,
  categoryId,
  categoryName,
) => (dispatch) => {
  const updateData = {
    title,
    body,
    author_id: authorId,
    author_name: authorName,
    category_id: categoryId,
    category_name: categoryName,
  };
  dispatch(updatePostRequest());
  axios
    .put(`/post/${postId}`, updateData)
    .then((response) => {
      dispatch(updatePostSuccess(response.data.data));
    })
    .catch((err) => {
      dispatch(updatePostFail(err));
    });
};

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

export const getPostsOfUser = (id) => {
	return (dispatch) => {
		
		dispatch({
				type: GET_ALL_POSTS_BY_AUTHOR_ID_REQUEST
		});
				
		axios.get(`/post/author/${id}`)
			.then((response) => {
				dispatch({
					type: GET_ALL_POSTS_BY_AUTHOR_ID_SUCCESS,
					payload: response.data.posts
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