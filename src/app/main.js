import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import 'shared/config/styles/reset.css';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router, store } from './index';
createRoot(document.getElementById('root')).render(_jsx(Provider, { store: store, children: _jsx(StrictMode, { children: _jsx(Suspense, { children: _jsx(RouterProvider, { router: router }) }) }) }));
