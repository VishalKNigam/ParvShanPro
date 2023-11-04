import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionTypes";
const initialState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    errorMessage: "",
    token: "",

}
export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST: return {
            ...state, isLoading: true
        }
        case LOGIN_SUCCESS: return {
            ...state,
            isLoading: false,
            isAuth: true,
            token: payload,
            isError: false,
        }
        case LOGIN_FAILURE: return {
            ...state,
            isLoading: false,
            isError: true,
            errorMessage: payload,
            isAuth: false
        }
        default: return {
            state,
        }
    }

}
