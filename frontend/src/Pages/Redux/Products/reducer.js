import { POST_PRODUCT_SUCCESS, PRODUCT_REQUEST, PRODUCT_FAILURE, GET_PRODUCT_SUCCESS } from "./actionTypes"

const initialState = {
    isLoading : false,
    isError: false,
    products: [],
}


export const reducer = (state= initialState, {type, payload})=>{
    switch(type){
        case PRODUCT_REQUEST: return{
            ...state, isLoading: true
        }
        case POST_PRODUCT_SUCCESS: return {
            ...state, isLoading: false,
        }
        case PRODUCT_FAILURE: return {
            ...state, isLoading: false, isError: true
        } 
        case GET_PRODUCT_SUCCESS: return {
            ...state, isLoading: false, products: payload
        }
        default: return state;
    }
}