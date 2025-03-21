import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { AuthForm } from 'features/auth';
import { Box } from '@mui/material';
const Auth = () => {
    return (_jsx(Box, { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", children: _jsx(AuthForm, {}) }));
};
export default memo(Auth);
