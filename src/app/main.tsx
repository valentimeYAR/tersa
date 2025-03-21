import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import 'shared/config/styles/reset.css';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router, store } from './index';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </StrictMode>
  </Provider>,
);
