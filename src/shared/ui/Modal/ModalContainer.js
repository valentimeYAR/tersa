import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from '@mui/material';
const ModalContainer = ({ children }) => {
    return (_jsx(Box, { position: "absolute", top: 0, right: 0, width: "100%", height: "100vh", bgcolor: "rgba(0, 0, 0, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", children: _jsx(Box, { component: "div", bgcolor: "white", borderRadius: "10px", width: "500px", p: 2, children: children }) }));
};
export default ModalContainer;
