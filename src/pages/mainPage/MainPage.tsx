import React, { memo } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import UFO from 'pages/mainPage/assets/UFO';

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Box display="flex" flexDirection="column" gap={4} alignItems="center">
        <Box
          sx={{
            background: 'rgba(21,101,192,0.75)',
            padding: '10px',
            borderRadius: '50%',
          }}
        >
          <UFO />
        </Box>
        <Box display="flex" flexDirection="column" gap={2} alignItems="center">
          <Typography variant="h5" sx={{ mb: 1 }} textAlign="center">
            Для пользования приложением необходимо авторизоваться!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 1 }}
            onClick={() => navigate('/login')}
          >
            Авторизация
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(MainPage);
