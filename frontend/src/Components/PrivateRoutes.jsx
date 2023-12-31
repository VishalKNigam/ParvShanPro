import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  console.log(location);
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  return isAuth ? children : <Navigate state={location} to={"/login"} replace={true}/>;
};