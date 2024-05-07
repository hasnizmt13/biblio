import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import './index.css';
import { AuthProvider } from './Utils/AuthContext';
import ProtectedRoute from './Utils/ProtectedRoute';

import HomeScreen from './pages/HomeScreen';
import SignInScreen from './pages/SignInScreen';
import SignUpScreen from './pages/SignUpScreen';
import ProfilScreen from './pages/ProfilScreen';
import EmpruntScreen from './pages/EmpruntScreen';
import ReservationScreen from './pages/ReservationScreen';
import HistoriqueScreen from './pages/HistoriqueScreen';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />
  },
  {
    path: "/signin",
    element: <SignInScreen />
  },
  {
    path: "/signup",
    element: <SignUpScreen />
  },
  {
    path: "/profile",
    element: <ProtectedRoute><ProfilScreen /></ProtectedRoute>
  },
  {
    path: "/reservation",
    element: <ProtectedRoute><ReservationScreen /></ProtectedRoute>
  },
  {
    path: "/emprunt",
    element: <ProtectedRoute><EmpruntScreen /></ProtectedRoute>
  },
  {
    path: "/historique",
    element: <ProtectedRoute><HistoriqueScreen/></ProtectedRoute>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
