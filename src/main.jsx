import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} >
          <App />
        </RouterProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
