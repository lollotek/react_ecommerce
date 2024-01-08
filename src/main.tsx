import React from 'react'
import ReactDOM from 'react-dom/client'

import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { productsApi } from './api/products/index.tsx';


import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider api={productsApi}>
      <Theme>
        <App />
      </Theme>
    </ApiProvider>
  </React.StrictMode>,
)
