import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { TextField } from 'shared/ui';
import { Box, Button, CircularProgress } from '@mui/material';
import { useLoginMutation } from '../model';
import { useNavigate } from 'react-router-dom';
const AuthForm = () => {
    const methods = useForm();
    const navigate = useNavigate();
    const [handleLogin, { isLoading }] = useLoginMutation();
    const onSubmit = (values) => {
        handleLogin(values).then((res) => {
            if (res.data?.error_code === 0) {
                localStorage.setItem('token', res?.data?.data?.token || '');
                navigate('/dashboard');
            }
            else {
                methods.setError('username', { type: 'server', message: 'Неверный логин или пароль' });
                methods.setError('password', { type: 'server', message: 'Неверный логин или пароль' });
            }
        });
    };
    return (_jsx(Box, { width: "100%", height: "100%", children: _jsx(FormProvider, { ...methods, children: _jsx("form", { onSubmit: methods.handleSubmit(onSubmit), style: { display: 'flex', justifyContent: 'center' }, children: _jsxs(Box, { display: "flex", flexDirection: "column", gap: 2, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", p: 4, width: "50%", children: [_jsx(Box, { alignSelf: "center", m: 2, children: _jsx("img", { src: "https://pryaniky.com/wp-content/themes/roystat_v6.15/img/svg/logo-face.svg", alt: "Logo", width: "300px", height: "300px" }) }), _jsxs(Box, { display: "flex", flexDirection: "column", gap: 2, children: [_jsx(TextField, { name: "username", label: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u043B\u043E\u0433\u0438\u043D", required: true }), _jsx(TextField, { name: "password", label: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u043F\u0430\u0440\u043E\u043B\u044C", type: "text", required: true }), _jsx(Button, { variant: "contained", type: "submit", children: isLoading ? _jsx(CircularProgress, { sx: { color: '#ffffff' } }) : 'Войти' })] })] }) }) }) }));
};
export default memo(AuthForm);
