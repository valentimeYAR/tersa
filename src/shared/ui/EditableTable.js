import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, } from '@mui/material';
const EditableTable = ({ name, columns }) => {
    const { watch } = useFormContext();
    const rows = watch(name) ?? [];
    if (rows.length === 0) {
        return (_jsx(Box, { width: "100%", height: "100%", display: "flex", justifyContent: "center", children: _jsx(Typography, { variant: "h2", textAlign: "center", children: "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442." }) }));
    }
    return (_jsx(TableContainer, { sx: { overflowX: 'auto', maxWidth: '100%' }, children: _jsxs(Table, { sx: { tableLayout: 'fixed' }, children: [_jsx(TableHead, { sx: {
                        border: '1px solid black',
                    }, children: _jsx(TableRow, { children: columns?.map((col) => (_jsx(TableCell, { sx: {
                                border: '1px solid black',
                                width: '200px',
                            }, children: col.label }, col.key))) }) }), rows.length > 0 && (_jsx(TableBody, { children: rows?.map((row) => (_jsx(TableRow, { children: columns?.map((col) => (_jsx(TableCell, { sx: {
                                border: '1px solid black',
                            }, children: col.cell ? col.cell({ row, value: row[col.key] }) : row[col.key] }, col.key))) }, row.id))) }))] }) }));
};
export default memo(EditableTable);
