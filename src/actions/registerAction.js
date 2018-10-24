import axios from '../axios';

import { getUser } from './AppAction';

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL    = 'REGISTER_FAIL'

export const handleRegistration = (authData) => {       
    return (dispatch) => {

        dispatch({
            type: REGISTER_REQUEST
        });

        axios.post('/auth/register', authData)
            .then((response) => {                
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: response.data.token
                })
                getUser()(dispatch);
            }) 
            .catch((error) => {
                dispatch({
                    type: REGISTER_FAIL,
                    payload: 'OOps..Something going wrong'
                })
            })         

    }
}