import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const AdminRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user || user.rôle !== "admin") {
    return <Navigate to="/signin" replace />;
  }
  return children ? children : <Outlet />;
};

export default AdminRoute;
