import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Box } from '@mui/material';
import { Dashboard } from 'features/dashboard';
const DashboardPage = () => {
    return (_jsx(Box, { children: _jsx(Dashboard, {}) }));
};
export default memo(DashboardPage);
