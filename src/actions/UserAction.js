export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export function handleLogin(callback) {
    return (dispatch) => {
        dispatch({
            type: LOGIN_REQUEST
        })
        // User.login(r => {
        //     if (r.session) {
        //       const username = r.session.user.id


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
    }
}

/*fetch('http://localhost:8080/api/auth/register', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
})
    .then((res)=>{
        return res.json();
    })
    .then((d)=>{
        if(d.success){
            dispatch({type:'SHOW_MESSAGE_SUCCESS'});

            setTimeout(()=>{
                dispatch({type:''});
            },2000)
        }
              
});*/
