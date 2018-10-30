import axios from '../axios';

export const GET_POST_REQUEST = '[Post] Get Post Request'
export const GET_POST_SUCCESS = '[Post] Get Post Success'
export const GET_POST_FAIL    = '[Post] Get Post Fail'

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
export const GET_FIND_POST_REQUEST = '[Post] Get Find Post Request'
export const GET_FIND_POST_SUCCESS = '[Post] Get Find Post Success'
export const GET_FIND_POST_FAIL    = '[Post] Get Find Post Fail'

export const getPostsOfUser = (id) => {
	return (dispatch) => {
		
		dispatch({
				type: GET_FIND_POST_REQUEST
		});
				
		axios.get(`/post/author/${id}`)
			.then((response) => {
				dispatch({
					type: GET_FIND_POST_SUCCESS,
					payload: response.data.data
			 })
			}) 
			.catch((error) => {
					dispatch({
						type: GET_FIND_POST_FAIL,
						payload: 'OOps..Something went wrong'
				 })
			})         

    }
}