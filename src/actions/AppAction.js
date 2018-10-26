import axios from '../axios';
export const GET_USER_REQUEST = 'GET_USER_REQUEST'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAIL = 'GET_USER_FAIL'

export const getUser = () => {
    return (dispatch) => {
      dispatch({
        type: GET_USER_REQUEST
      });
      let i = axios.defaults.headers;
      debugger;
      return axios.get('/user')
        .then((response)=>{
            debugger;
            dispatch({
                type: GET_USER_SUCCESS,
                payload: response.data.user,
             })
         })
        .catch(()=> {
             dispatch({
                type: GET_USER_FAIL,
                payload: 'Oooops...',
             })
        }) 
    }
}
