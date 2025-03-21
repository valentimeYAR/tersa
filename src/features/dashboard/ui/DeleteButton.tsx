import React, { memo } from 'react';
import { Button, CircularProgress } from '@mui/material';
import { useDeleteDocumentMutation } from 'features/dashboard/model';

interface Props {
  id: string;
}

const DeleteButton = ({ id }: Props) => {
  const [handleDelete, { isLoading }] = useDeleteDocumentMutation();

  return (
    <Button onClick={() => handleDelete({ id })}>
      {isLoading ? <CircularProgress sx={{ color: '#ffffff' }} /> : 'Удалить'}
    </Button>
  );
};

export default memo(DeleteButton);
