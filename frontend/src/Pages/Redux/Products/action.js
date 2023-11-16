import axios from "axios";
import { GET_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes"

export const addProduct = (newProduct)=> (dispatch) =>{
    dispatch({type: PRODUCT_REQUEST});
    axios.post(`http://localhost:8080/products`, newProduct)
    .then((res)=>{
        dispatch({type: POST_PRODUCT_SUCCESS});
    })
    .catch((err)=>{
        dispatch({type: PRODUCT_FAILURE});
    })
}
export const getProduct = (paramsObj)=>(dispatch)=>{
    dispatch({type: PRODUCT_REQUEST});
    axios.get(`http://localhost:8080/products`, paramsObj)
    .then((res)=>{
        dispatch({type: GET_PRODUCT_SUCCESS, payload: res.data});
    })
    .catch((err)=>{
        dispatch({type: PRODUCT_FAILURE});
    })
    
}
export const EditProduct = (paramsObj)=>(dispatch)=>{
    dispatch({type: PRODUCT_REQUEST});
    axios.get(`http://localhost:8080/products`, paramsObj)
    .then((res)=>{
        dispatch({type: GET_PRODUCT_SUCCESS, payload: res.data});
    })
    .catch((err)=>{
        dispatch({type: PRODUCT_FAILURE});
    })
    
}