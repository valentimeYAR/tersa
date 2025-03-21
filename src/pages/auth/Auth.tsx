import React, { memo } from 'react';
import { AuthForm } from 'features/auth';
import { Box } from '@mui/material';

const Auth = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <AuthForm />
    </Box>
  );
};

export default memo(Auth);
