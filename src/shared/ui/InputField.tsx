import React, { HTMLInputTypeAttribute, memo } from 'react';
import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface Props {
  name: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
}

const InputField = ({ name, label, type = 'text', required }: Props) => {
  const { formState, control, getFieldState } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required ? 'Поле обязательно для заполнения' : '',
      }}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          size="small"
          variant="outlined"
          fullWidth
          type={type}
          error={!!getFieldState(name, formState)?.error}
          helperText={
            formState.errors[name]?.message ? String(formState.errors[name]?.message) : ''
          }
          slotProps={{
            formHelperText: {
              sx: { marginLeft: 0 },
            },
          }}
        />
      )}
    />
  );
};

export default memo(InputField);
