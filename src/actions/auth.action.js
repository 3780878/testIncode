import axios from '../axios';

import { getUser } from './root.action';

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL    = 'REGISTER_FAIL'

export const handleRegistration = (authData) => {       
    return (dispatch) => {

        dispatch({
            type: REGISTER_REQUEST
        });

        axios.post('/auth', authData)
            .then((response) => {       
                localStorage.setItem('token', response.data.token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: response.data.token
                })
                dispatch(getUser());
            }) 
            .catch((error) => {
                dispatch({
                    type: REGISTER_FAIL,
                    payload: 'OOps..Something going wrong'
                })
            })         

    }
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL    = 'LOGIN_FAIL'
export const LOGOUT        = 'LOGOUT'

const logoutHandler = () => ({
     type: LOGOUT,
 });

export const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    axios.defaults.headers.common = {};
    dispatch(logoutHandler());    
}

 export const handleLogin = (authData) => {
    return (dispatch) => {

        dispatch({
            type: LOGIN_REQUEST
        });

        axios.post('/login', authData)
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
                
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: response.data.token
                })
                
                getUser()(dispatch);
            }) 
            .catch((error) => {
                dispatch({
                    type: LOGIN_FAIL,
                    payload: 'OOps..Something going wrong'
                })
            })         

    }
}

/*import { browserHistory } from 'react-router'


this.props.dispatch(registerStep1Success())
browserHistory.push('/registrationStep2')


export function loginSuccess(data) {
    return (dispatch) => {
        dispatch({
            type: LOGIN_SUCCESS,
            data,
        }).then((response) => {
            dispatch(push('/my_url'));
        });
    };
}
*/