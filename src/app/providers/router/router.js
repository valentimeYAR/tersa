import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from 'widgets/layout/MainLayout';
import { navigationPaths } from 'shared/config/routes';
import PrivateRoute from './RouterProvider';
import { AuthPage, DashboardPage, MainPage } from 'pages/index';
const routerObject = [
    {
        path: navigationPaths.mainPage,
        element: _jsx(MainLayout, {}),
        children: [
            {
                index: true,
                element: _jsx(MainPage, {}),
            },
            {
                path: navigationPaths.login,
                element: _jsx(AuthPage, {}),
            },
            {
                element: _jsx(PrivateRoute, {}),
                children: [
                    {
                        path: navigationPaths.dashboard,
                        element: _jsx(DashboardPage, {}),
                    },
                ],
            },
        ],
    },
];
export const router = createBrowserRouter(routerObject);
