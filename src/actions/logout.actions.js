
export const LOGOUT        = 'LOGOUT'

const logoutHandler = () => ({
     type: LOGOUT,
 });

export const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    axios.defaults.headers.common = {};
    dispatch(logoutHandler());    
}