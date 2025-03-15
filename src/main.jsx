import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'

import Authprovider from './authprovider/Authprovider.jsx'
import router from './Route/Routes.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
    <RouterProvider router={router}>

</RouterProvider>
    </Authprovider>
  </StrictMode>,
)
