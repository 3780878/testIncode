import axios from '../axios';

import { getUser } from './AppAction';

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL    = 'LOGIN_FAIL'

export const handleLogin = (authData) => {       
    return (dispatch) => {

        dispatch({
            type: LOGIN_REQUEST
        });

        axios.post('/auth/register', authData)
            .then((response) => {                
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: response.data.token
                })
                getUser()(dispatch);
            }) 
            .catch((error) => {
               debugger;
                dispatch({
                    type: LOGIN_FAIL,
                    payload: 'OOps..Something going wrong'
                })
            })         

    }
}
