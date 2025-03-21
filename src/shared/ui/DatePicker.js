import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Controller, useFormContext } from 'react-hook-form';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const DatePickerComponent = ({ name, required }) => {
    const methods = useFormContext();
    return (_jsx(LocalizationProvider, { dateAdapter: AdapterDayjs, children: _jsx(Controller, { name: name, control: methods.control, rules: {
                required: required ? 'Поле обязательно для заполнения' : '',
            }, render: ({ field }) => (_jsx(DatePicker, { ...field, label: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443", format: "DD/MM/YYYY", value: field.value ? dayjs(field.value) : null, onChange: (newValue) => field.onChange(newValue ? newValue.toISOString() : null), slotProps: {
                    textField: {
                        size: 'small',
                        error: !!methods.getFieldState(name, methods.formState)?.error,
                        helperText: methods.getFieldState(name, methods.formState)?.error?.message || 'Выберите дату',
                    },
                } })) }) }));
};
export default memo(DatePickerComponent);
