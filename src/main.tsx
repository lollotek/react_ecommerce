import React from 'react'
import ReactDOM from 'react-dom/client'

import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { productsApi } from './api/products/index.tsx';

import { RouterProvider } from "react-router-dom";
import { router } from './services/router/router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider api={productsApi}>
      <Theme>
        <RouterProvider router={router} />        
      </Theme>
    </ApiProvider>
  </React.StrictMode>,
)
