import React, { memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { TextField } from 'shared/ui';
import { Box, Button, CircularProgress } from '@mui/material';
import { useLoginMutation } from '../model';
import { useNavigate } from 'react-router-dom';

interface FieldValues {
  username: string;
  password: string;
}

const AuthForm = () => {
  const methods = useForm<FieldValues>();
  const navigate = useNavigate();
  const [handleLogin, { isLoading }] = useLoginMutation();

  const onSubmit = (values: FieldValues) => {
    handleLogin(values).then((res) => {
      if (res.data?.error_code === 0) {
        localStorage.setItem('token', res?.data?.data?.token || '');
        navigate('/dashboard');
      } else {
        methods.setError('username', { type: 'server', message: 'Неверный логин или пароль' });
        methods.setError('password', { type: 'server', message: 'Неверный логин или пароль' });
      }
    });
  };

  return (
    <Box width="100%" height="100%">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Box
            display="flex"
            flexDirection="column"
            gap={2}
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
            p={4}
            width="50%"
          >
            <Box alignSelf="center" m={2}>
              <img
                src="https://pryaniky.com/wp-content/themes/roystat_v6.15/img/svg/logo-face.svg"
                alt="Logo"
                width="300px"
                height="300px"
              />
            </Box>
            <Box display="flex" flexDirection="column" gap={2}>
              <TextField name="username" label="Введите свой логин" required={true} />
              <TextField name="password" label="Введите свой пароль" type="text" required={true} />
              <Button variant="contained" type="submit">
                {isLoading ? <CircularProgress sx={{ color: '#ffffff' }} /> : 'Войти'}
              </Button>
            </Box>
          </Box>
        </form>
      </FormProvider>
    </Box>
  );
};

export default memo(AuthForm);
