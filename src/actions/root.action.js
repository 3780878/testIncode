import axios from '../axios';

export const GET_USER_REQUEST = '[Get User] Get User Request'
export const GET_USER_SUCCESS = '[Get User] Get User Success'
export const GET_USER_FAIL = '[Get User] Get User Fail'

export const getUser = () => {
    return (dispatch) => {
      dispatch({
        type: GET_USER_REQUEST
      });

      axios.get('/user')
        .then((response) => {
            dispatch({
                type: GET_USER_SUCCESS,
                payload: response.data,
            });
         })
        .catch(()=> {
             dispatch({
                type: GET_USER_FAIL,
                payload: 'Oooops...',
             })
        }) 
    }
}

export const LOGOUT  = '[Root] Logout'

const logoutHandler = () => ({
    type: LOGOUT,
});

export const logout = () => (dispatch) => {
   localStorage.clear();
   axios.defaults.headers.common = {};
   dispatch(logoutHandler());    
}