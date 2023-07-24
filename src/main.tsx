import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import ModalState from './context/Modal/ModalState';
import './index.css';
import router from './pages/AppRoutes';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <ModalState>
        <RouterProvider router={router} />
      </ModalState>
    </ChakraProvider>
  </React.StrictMode>
);
