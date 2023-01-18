import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import ModalState from './context/Modal/ModalState';
import './index.css';
import router from './pages/AppRoutes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ModalState>
      <RouterProvider router={router} />
    </ModalState>
  </React.StrictMode>
);
