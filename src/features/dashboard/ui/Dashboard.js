import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { columns, useGetDocumentsQuery } from '../model';
import { Box, CircularProgress } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { EditableTable } from 'shared/ui';
import EditButton from './EditButton';
const Dashboard = () => {
    const { isLoading, data } = useGetDocumentsQuery();
    const methods = useForm({
        values: {
            rows: data?.data,
        },
    });
    const onSubmit = () => {
        console.log();
    };
    if (isLoading) {
        return _jsx(CircularProgress, {});
    }
    return (_jsx(FormProvider, { ...methods, children: _jsxs("form", { onSubmit: methods.handleSubmit(onSubmit), children: [_jsx(Box, { sx: { flexDirection: 'column', display: 'flex', justifyContent: 'flex-end' }, mb: 4, children: _jsx(Box, { children: _jsx(EditButton, { value: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C", info: {}, isEdit: false }) }) }), _jsx(EditableTable, { name: "rows", columns: columns })] }) }));
};
export default memo(Dashboard);
