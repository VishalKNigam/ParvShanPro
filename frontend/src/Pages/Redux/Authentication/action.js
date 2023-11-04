import {LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS} from "./actionTypes";
import axios from "axios";
export const login = (loginData)=>(dispatch)=>{
    dispatch({type: LOGIN_REQUEST});
    axios.post("https://reqres.in/api/login", loginData).then((res)=>{
        console.log(res.data)
        dispatch({type: LOGIN_SUCCESS, payload: res.data.token});
        // console.log(token);
    }).catch((err)=>{
        dispatch({type: LOGIN_FAILURE, payload: err.message});

    })
} 