import axios from '../axios';

export const ADD_POST_REQUEST = '[Post] Add Post Request'
export const ADD_POST_SUCCESS = '[Post] Add Post Success'
export const ADD_POST_FAIL    = '[Post] Add Post Fail'

export const addNewPost = () => {       
    return (dispatch) => {

        dispatch({
            type: ADD_POST_REQUEST
        });

        axios.post('/post')
            .then((response) => {
                dispatch({
                    type: ADD_POST_SUCCESS,
                    payload: response.data.post
                })
            }) 
            .catch((error) => {
                dispatch({
                    type: ADD_POST_FAIL,
                    payload: 'OOps..Something went wrong'
                })
            })         

    }
}
