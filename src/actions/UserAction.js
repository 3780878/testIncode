

import axios from 'axios';
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export function handleLogin() {

    return (dispatch) => {
        dispatch({
            type: LOGIN_REQUEST
        })

            axios.get('/localhost:8080/api/auth/register')
            .then((response) => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: response.token
                })

            }) 
            .catch((error) => {
                dispatch({
                    type: LOGIN_FAIL,
                    payload: error('OOps..Something going wrong')
                })
            }) 

    }
}




        // axios request to server to get token
        
        // in case of success dispatch LOGIN_SUCCESS with token as payload

        /** 
            .then((response) => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: response.`catch token here`
                })

            }) 
        */
        // in case of failure dispatch LOGIN_FAIL with error message as payload

        /** 
            .catch((error) => {
                dispatch({
                    type: LOGIN_FAIL,
                    payload: 'Ooops...'
                })
            }) 
        */      