import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
const InputField = ({ name, label, type = 'text', required }) => {
    const { formState, control, getFieldState } = useFormContext();
    return (_jsx(Controller, { name: name, control: control, rules: {
            required: required ? 'Поле обязательно для заполнения' : '',
        }, render: ({ field }) => (_jsx(TextField, { ...field, label: label, size: "small", variant: "outlined", fullWidth: true, type: type, error: !!getFieldState(name, formState)?.error, helperText: formState.errors[name]?.message ? String(formState.errors[name]?.message) : '', slotProps: {
                formHelperText: {
                    sx: { marginLeft: 0 },
                },
            } })) }));
};
export default memo(InputField);
