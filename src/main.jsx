import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// react router
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';

// react helmet async
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </React.StrictMode>,
)
