export const FORM_LOGGEDIN = 'FORM_LOGGEDIN'
export const FORM_LOADED = 'FORM_LOADED'
export const FORM_LOADING = 'FORM_LOADING'

export function FORM_REQUEST(callback) {
    return function(dispatch) {
      dispatch({
        type: FORM_LOGGEDIN,
      })
      fetch('http://localhost:/???', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify()
})
    .then((res)=>{
        return res.json();
    })
    .then((d)=>{
        if(d.success){
            dispatch({
                type: FORM_LOADED,
                payload: '',
              })
              callback()
            } else {
              dispatch({
                type: FORM_LOADING,
                error: true,
                payload: 'Your preloader coming soon',
            })
        }
        }
    )}       
};
