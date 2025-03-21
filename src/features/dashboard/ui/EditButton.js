import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { useDisclosure } from 'shared/hooks';
import ModalContainer from 'shared/ui/Modal/ModalContainer';
import { FormProvider, useForm } from 'react-hook-form';
import { DatePicker, TextField } from 'shared/ui';
import { useCreateDocumentMutation, useUpdateDocumentMutation, } from 'features/dashboard/model';
const EditButton = ({ value, info, isEdit }) => {
    const [handleCreate, { isLoading }] = useCreateDocumentMutation();
    const [handleUpdate, { isLoading: isLoadingUpdate }] = useUpdateDocumentMutation();
    const methods = useForm({
        defaultValues: info?.row || {},
    });
    const { isOpen, onOpen, onClose } = useDisclosure();
    const onSubmit = (values) => {
        if (isEdit) {
            handleUpdate({ id: info?.row?.id || '', body: values }).then(() => onClose());
        }
        else {
            handleCreate(values).then(() => onClose());
        }
    };
    return (_jsxs(FormProvider, { ...methods, children: [isEdit ? (_jsx(Button, { variant: "contained", onClick: onOpen, children: value })) : (_jsx(Button, { variant: "contained", sx: {
                    backgroundColor: '#2196f3',
                    color: '#fff',
                    padding: '10px 20px',
                    fontSize: '16px',
                    borderRadius: '12px',
                    textTransform: 'none',
                    boxShadow: '0 4px 10px rgba(33, 150, 243, 0.3)',
                    transition: '0.3s ease',
                    '&:hover': {
                        backgroundColor: '#1e88e5',
                        boxShadow: '0 6px 15px rgba(33, 150, 243, 0.4)',
                    },
                }, onClick: onOpen, children: value })), isOpen && (_jsx(ModalContainer, { children: _jsxs("form", { onSubmit: methods.handleSubmit(onSubmit), children: [_jsx(Typography, { variant: "h6", mb: 3, children: isEdit ? 'Редактирование документа' : 'Создание документа' }), _jsxs(Box, { display: "flex", flexDirection: "column", gap: 2, mb: 2, children: [_jsx(TextField, { name: "companySignatureName", label: "\u0418\u043C\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0442\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438", required: true }), _jsx(TextField, { name: "documentName", label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430", required: true }), _jsx(TextField, { name: "documentStatus", label: "\u0421\u0442\u0430\u0442\u0443\u0441 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430", required: true }), _jsx(TextField, { name: "documentType", label: "\u0422\u0438\u043F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430", required: true }), _jsx(TextField, { name: "employeeNumber", label: "\u041D\u043E\u043C\u0435\u0440 \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A\u0430", required: true }), _jsx(TextField, { name: "employeeSignatureName", label: "\u0418\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A\u0430", required: true }), !isEdit && (_jsxs(_Fragment, { children: [_jsx(DatePicker, { name: "companySigDate", required: true }), _jsx(DatePicker, { name: "employeeSigDate", required: true })] }))] }), _jsxs(Box, { display: "flex", gap: 2, children: [_jsx(Button, { variant: "contained", onClick: methods.handleSubmit(onSubmit), children: isLoading || isLoadingUpdate ? (_jsx(CircularProgress, { sx: { color: '#ffffff' } })) : ('Сохранить') }), _jsx(Button, { variant: "outlined", color: "error", onClick: onClose, children: "\u041E\u0442\u043C\u0435\u043D\u0430" })] })] }) }))] }));
};
export default memo(EditButton);
