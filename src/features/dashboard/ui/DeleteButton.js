import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { Button, CircularProgress } from '@mui/material';
import { useDeleteDocumentMutation } from 'features/dashboard/model';
const DeleteButton = ({ id }) => {
    const [handleDelete, { isLoading }] = useDeleteDocumentMutation();
    return (_jsx(Button, { onClick: () => handleDelete({ id }), children: isLoading ? _jsx(CircularProgress, { sx: { color: '#ffffff' } }) : 'Удалить' }));
};
export default memo(DeleteButton);
