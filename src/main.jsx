import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './Route/Route.jsx'
import Auth from './Authentication/Auth'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth>
      <RouterProvider router={route}></RouterProvider>
    </Auth>
  </React.StrictMode>,
)
