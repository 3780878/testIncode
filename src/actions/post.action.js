import axios from '../axios';

export const GET_POST_REQUEST = '[Post] Get Post Request'
export const GET_POST_SUCCESS = '[Post] Get Post Success'
export const GET_POST_FAIL    = '[Post] Get Post Fail'

export const getPost = (authData) => {       
    return (dispatch) => {

        dispatch({
            type: GET_POST_REQUEST
        });

        axios.post('/post', authData)
            .then((response) => {       
                //localStorage.setItem('id', response.data.id);
               // axios.defaults.headers.common['Post'] = `Bearer ${localStorage.getItem('id')}`;

                dispatch({
                    type: GET_POST_SUCCESS,
                    payload: response.data.token
                })
                dispatch(getPost());
            }) 
            .catch((error) => {
                dispatch({
                    type: GET_POST_FAIL,
                    payload: 'OOps..Something going wrong'
                })
            })         

    }
}
