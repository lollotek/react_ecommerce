import React from 'react'
import ReactDOM from 'react-dom/client'

import { Theme } from '@radix-ui/themes';

import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { productsApi } from './api/products/index.tsx';

import { RouterProvider } from "react-router-dom";
import { router } from './services/router/router.tsx';
import * as Toast from '@radix-ui/react-toast';

import '@radix-ui/themes/styles.css';
import './theme-config.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider api={productsApi}>
      <Theme>
        <Toast.Provider swipeDirection="right">
          <RouterProvider router={router} />        
          <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
        </Toast.Provider>
      </Theme>
    </ApiProvider>
  </React.StrictMode>,
)
