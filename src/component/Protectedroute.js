import React from "react";
import { Navigate } from "react-router-dom";
import SideNav from "./Sidenav";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
  const selector = useSelector((state) => state.user.value);
  console.log(selector);
  return selector.isLoggedIn ? <SideNav /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
