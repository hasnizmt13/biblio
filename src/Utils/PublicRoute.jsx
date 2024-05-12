import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PublicRoute = ({ children }) => {
  const { user, role } = useAuth();

  if (user && user.rôle === "lecteur") {
    return <Navigate to="/profile" replace />;
  } else if (user && user.rôle === "admin") {
    return <Navigate to="/userManager" replace />;
  }
  return children ? children : <Outlet />;
};

export default PublicRoute;
