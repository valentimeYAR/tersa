import { createBrowserRouter } from 'react-router-dom';
import MainLayout from 'widgets/layout/MainLayout';
import { navigationPaths } from 'shared/config/routes';
import PrivateRoute from './RouterProvider';
import { AuthPage, DashboardPage, MainPage } from 'pages/index';

const routerObject = [
  {
    path: navigationPaths.mainPage,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: navigationPaths.login,
        element: <AuthPage />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: navigationPaths.dashboard,
            element: <DashboardPage />,
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routerObject);
