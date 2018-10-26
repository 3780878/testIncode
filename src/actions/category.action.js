import axios from '../axios';

export const PUSH_CAT_REQUEST = 'PUSH_CAT_REQUEST'
export const PUSH_CAT_SUCCESS = 'PUSH_CAT_SUCCESS'
export const PUSH_CAT_FAIL = 'PUSH_CAT_FAIL'

export const pushCat = () => {
    return (dispatch) => {
      dispatch({
        type: PUSH_CAT_REQUEST
      });
      return axios.get('/categories')
        .then((response)=>{
            dispatch({
                type: PUSH_CAT_SUCCESS,
                payload: response.data.category,
             })
         })
        .catch(()=> {
             dispatch({
                type: PUSH_CAT_FAIL,
                payload: 'Oooops...this category we have already',
             })
        }) 
    }
}

export const GET_CAT_REQUEST = '[Category] Get Categories Request';
export const GET_CAT_SUCCESS = '[Category] Get Categories Success';
export const GET_CAT_FAIL = '[Category] Get Categories Fail';

// export const addingCat = (data) => {
// 	return (dispatch) => {
// 		dispatch({
// 			type: PUSHCAT_REQUEST
// 		});
// 			axios.post('/categories', {id: category.data.id, title: category.data.title, description: category.data.description})
// 				.then((response) => {
// 					localStorage.setItem('categories_id', response.data.id);
// 				dispatch({
// 			type: PUSHCAT_SUCCESS,
// 					payload: response.data.category.id
// 				})
// 				pushCat()(dispatch);
// 				}) 
// 				.catch((error) => {
// 				dispatch({
// 			type: PUSHCAT_FAIL,
// 					payload: 'OOps..Something going wrong'
// 				})
// 		})         

// 	}
// }
