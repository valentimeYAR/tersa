import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
const MainLayout = () => {
    return (_jsx(Container, { component: "main", sx: { padding: '20px', minHeight: '100vh' }, children: _jsx(Outlet, {}) }));
};
export default memo(MainLayout);
