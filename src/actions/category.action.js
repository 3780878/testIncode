import axios from '../axios';

export const GET_CAT_REQUEST = '[Category] Get Categories Request';
export const GET_CAT_SUCCESS = '[Category] Get Categories Success';
export const GET_CAT_FAIL = '[Category] Get Categories Fail';


export const getCategory = () => {
    return (dispatch) => {
      dispatch({
        type: GET_CAT_REQUEST
      });
      
      axios.get('/category')
        .then((response) => {
            dispatch({
                type: GET_CAT_SUCCESS,
                payload: response.data.categories,
             })
         })
        .catch(()=> {
             dispatch({
                type: GET_CAT_FAIL,
                payload: 'Oooops...',
             })
        }) 
    }
}
