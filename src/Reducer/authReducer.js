import {AUTH_ACTIONS, AUTH_INITIAL_STATE} from "../constance/authConstance.js";
export const authReducer =(state = AUTH_INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_ACTIONS.SET_LOADING:
            return {...state, isLoading: action.payload}
        case AUTH_ACTIONS.SET_USER:
            return {...state, user: action.payload, isAuthenticated: !!action.payload, isLoading: false, error: null}
        case AUTH_ACTIONS.SET_ERROR:
            return {...state, error: action.payload, isLoading: false}
        case AUTH_ACTIONS.LOGOUT:
            return {...state, user: null, isAuthenticated: false, isLoading: false, error:  null}
        case AUTH_ACTIONS.RESET_ERROR:
            return {...state, error: null}
        default:
            return state
    }
}
//Auth action creators
export const authActions = {
    setLoading: (isLoading)=> ({
        type: AUTH_ACTIONS.SET_LOADING,
        payload: isLoading
    }),
    setUser: (user)=>({
        type: AUTH_ACTIONS.SET_USER,
        payload: user
    }),
    setError:(error)=>({
        type: AUTH_ACTIONS.SET_ERROR,
        payload: error
    }),
    logout:()=>({
        type: AUTH_ACTIONS.LOGOUT
    }),
    resetError:()=>({
        type: AUTH_ACTIONS.RESET_ERROR
    })
}
