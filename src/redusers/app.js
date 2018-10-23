import {
   FORM_LOGGEDIN,
   FORM_LOADED,
   FORM_LOADING
} from '../actions/AppAction';
const initialState = {
    user:     {},
    loggedIn: true,
    loaded:   false,
    loading:  false
    };

export function appReducer(state = initialState, action)
{
    switch(action.type)
    {  
        case FORM_LOGGEDIN:

        return {
            ...state,
            user:{...state.user, ...action.data},
            loggedIn:true, loaded: true, loading: false          
        }

        case FORM_LOADED:

        return {
            ...state,
            userErrors:{...state.userErrors, ...action.data} ,
            loggedIn: false, loaded: true, loading: false         
        }
        case FORM_LOADING:

        return {
            ...state, //for some pretty preload
            user:{...state.user, ...action.data},
            loggedIn:true, loaded: true, loading: true         
        }
        default: return state;
    }
    
}