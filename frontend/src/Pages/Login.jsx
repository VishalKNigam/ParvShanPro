import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { login } from "../Redux/Authentication/action";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const width = 40; // The width of the rectangle
const goldenRatio = 1.6180339887; // The golden ratio
export const Login = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(navigate);
  const location = useLocation();
  const { isAuth, isError, errorMessage } = useSelector((store) => {
    return {
      isAuth: store.authReducer.isAuth,
      isError: store.authReducer.isError,
      errorMessage: store.authReducer.errorMessage,
    };
  }, shallowEqual);

  const handleLogin = () => {
    const details = {
      email,
      password,
    };
    dispatch(login(details))
    
  }
  useEffect(()=>{
    if(isAuth){
      navigate(location.state, {replace: true})
      // navigate(-1)-- less controlled way
    }
  },[isAuth, navigate])
  return (
    <DIV auth={isAuth} err={isError}>
      <h1>{isAuth ? "Login Successful" : "Please Login"}</h1>
      <h2>{isError && errorMessage}</h2>
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button type="submit" onClick={handleLogin}>
        Login
      </button>
    </DIV>
  );
};
const DIV = styled.div`
  display: flex;
  flex-direction: column;
  width: ${width}%;
  height: ${width / goldenRatio}%;
  margin: auto;
  border: 2px solid black;
  padding: 35px;
  border-radius: 2%;
  background: linear-gradient(white, gray, white);
  input,
  button {
    outline: none;
    background: linear-gradient(white, white);
    border-radius: 10%;
    padding: 10px;
  }
  input {
    border: ${({ err, auth }) => (err ? "1px solid red" : "1px solid gray")};
  }
  h1 {
    color: ${({ auth }) => (auth ? "green" : "")};
  }
  button {
    cursor: pointer;
    background-color: #888;
  }
  button:hover {
    background-color: #666;
  }
`;
