import axios from '../axios';

import { getUser } from './root.action';
import appHistory from '../history';

export const REGISTER_REQUEST = '[Register] Get Register Request'
export const REGISTER_SUCCESS = '[Register] Get Register Success'
export const REGISTER_FAIL    = '[Register] Get Register Fail'

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
			
			dispatch(getUser())
			appHistory.push('/');
			
		}) 
		.catch((error) => {
			dispatch({
					type: REGISTER_FAIL,
					payload: 'OOps..Something went wrong'
			})
		}) 
	}
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL    = 'LOGIN_FAIL'

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
				});

				getUser()(dispatch);
				appHistory.push('/');
			}) 
			.catch((error) => {
					dispatch({
						type: LOGIN_FAIL,
						payload: 'OOps..Something going wrong'
					})
			})   
	}
}
