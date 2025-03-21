import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

const MainLayout = () => {
  return (
    <Container component="main" sx={{ padding: '20px', minHeight: '100vh' }}>
      <Outlet />
    </Container>
  );
};

export default memo(MainLayout);
