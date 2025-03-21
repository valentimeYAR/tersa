import { Navigate, Outlet } from 'react-router-dom';
import { memo } from 'react';

const PrivateRoute = () => {
  const isAuthenticated = !!localStorage.getItem('token');

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default memo(PrivateRoute);
