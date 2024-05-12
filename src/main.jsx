import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./Utils/AuthContext";
import ProtectedRoute from "./Utils/ProtectedRoute";
import PublicRoute from "./Utils/PublicRoute";
import HomeScreen from "./pages/LecteurPages/HomeScreen";
import SignInScreen from "./pages/SignInScreen";
import SignUpScreen from "./pages/SignUpScreen";
import ProfilScreen from "./pages/LecteurPages/ProfilScreen";
import EmpruntScreen from "./pages/LecteurPages/EmpruntScreen";
import ReservationScreen from "./pages/LecteurPages/ReservationScreen";
import HistoriqueScreen from "./pages/LecteurPages/HistoriqueScreen";
import AdminRoute from "./Utils/AdminRoute";
import HistoriqueManagerScreen from "./pages/AdminPages/HistoriqueManagerScreen";
import EmpruntManagerScreen from "./pages/AdminPages/EmpruntManagerScreen";
import ReservationManagerScreen from "./pages/AdminPages/ReservationManagerScreen";
import UserManagerScreen from "./pages/AdminPages/UserManagerScreen";
import LivreManagerScreen from "./pages/AdminPages/LivreManagerScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/signin",
    element: (
      <PublicRoute>
        <SignInScreen />
      </PublicRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <PublicRoute>
        <SignUpScreen />
      </PublicRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <ProfilScreen />
      </ProtectedRoute>
    ),
  },
  {
    path: "/reservation",
    element: (
      <ProtectedRoute>
        <ReservationScreen />
      </ProtectedRoute>
    ),
  },
  {
    path: "/emprunt",
    element: (
      <ProtectedRoute>
        <EmpruntScreen />
      </ProtectedRoute>
    ),
  },
  {
    path: "/historique",
    element: (
      <ProtectedRoute>
        <HistoriqueScreen />
      </ProtectedRoute>
    ),
  },
  {
    path: "/historiqueManager",
    element: (
      <AdminRoute>
        <HistoriqueManagerScreen />
      </AdminRoute>
    ),
  },
  {
    path: "/empruntManager",
    element: (
      <AdminRoute>
        <EmpruntManagerScreen />
      </AdminRoute>
    ),
  },
  {
    path: "/reservationManager",
    element: (
      <AdminRoute>
        <ReservationManagerScreen />
      </AdminRoute>
    ),
  },
  {
    path: "/livresManager",
    element: (
      <AdminRoute>
        <LivreManagerScreen />
      </AdminRoute>
    ),
  },
  {
    path: "/userManager",
    element: (
      <AdminRoute>
        <UserManagerScreen />
      </AdminRoute>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
