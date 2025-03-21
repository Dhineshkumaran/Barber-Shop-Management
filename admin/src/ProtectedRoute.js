import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const isAuthenticated = () => {
  return localStorage.getItem('LoggedIn') ? true : false;
};

const ProtectedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
