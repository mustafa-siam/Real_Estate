import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Authprovider from './authprovider/Authprovider.jsx'
import router from './Route/Routes.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </Authprovider>
  </StrictMode>,
)
