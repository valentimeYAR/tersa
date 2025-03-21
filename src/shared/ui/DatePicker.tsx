import React, { memo } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Controller, useFormContext } from 'react-hook-form';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface Props {
  name: string;
  required?: boolean;
}

const DatePickerComponent = ({ name, required }: Props) => {
  const methods = useFormContext();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={methods.control}
        rules={{
          required: required ? 'Поле обязательно для заполнения' : '',
        }}
        render={({ field }) => (
          <DatePicker
            {...field}
            label="Выберите дату"
            format="DD/MM/YYYY"
            value={field.value ? dayjs(field.value) : null}
            onChange={(newValue) => field.onChange(newValue ? newValue.toISOString() : null)}
            slotProps={{
              textField: {
                size: 'small',
                error: !!methods.getFieldState(name, methods.formState)?.error,
                helperText:
                  methods.getFieldState(name, methods.formState)?.error?.message || 'Выберите дату',
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default memo(DatePickerComponent);
