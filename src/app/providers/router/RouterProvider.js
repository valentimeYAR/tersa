import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate, Outlet } from 'react-router-dom';
import { memo } from 'react';
const PrivateRoute = () => {
    const isAuthenticated = !!localStorage.getItem('token');
    return isAuthenticated ? _jsx(Outlet, {}) : _jsx(Navigate, { to: "/", replace: true });
};
export default memo(PrivateRoute);
