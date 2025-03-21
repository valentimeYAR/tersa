import React from 'react';
import { Box } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

const ModalContainer = ({ children }: Props) => {
  return (
    <Box
      position="absolute"
      top={0}
      right={0}
      width="100%"
      height="100vh"
      bgcolor="rgba(0, 0, 0, 0.1)"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box component="div" bgcolor="white" borderRadius="10px" width="500px" p={2}>
        {children}
      </Box>
    </Box>
  );
};

export default ModalContainer;
