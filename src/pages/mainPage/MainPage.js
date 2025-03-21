import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import UFO from 'pages/mainPage/assets/UFO';
const MainPage = () => {
    const navigate = useNavigate();
    return (_jsx(Box, { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", children: _jsxs(Box, { display: "flex", flexDirection: "column", gap: 4, alignItems: "center", children: [_jsx(Box, { sx: {
                        background: 'rgba(21,101,192,0.75)',
                        padding: '10px',
                        borderRadius: '50%',
                    }, children: _jsx(UFO, {}) }), _jsxs(Box, { display: "flex", flexDirection: "column", gap: 2, alignItems: "center", children: [_jsx(Typography, { variant: "h5", sx: { mb: 1 }, textAlign: "center", children: "\u0414\u043B\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F!" }), _jsx(Button, { variant: "contained", color: "primary", sx: { mt: 1 }, onClick: () => navigate('/login'), children: "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F" })] })] }) }));
};
export default memo(MainPage);
