import React, { memo } from 'react';
import { Box } from '@mui/material';
import { Dashboard } from 'features/dashboard';

const DashboardPage = () => {
  return (
    <Box>
      <Dashboard />
    </Box>
  );
};

export default memo(DashboardPage);
