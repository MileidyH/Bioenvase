import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Contact from './pages/Contact'
import Biodegradable from './pages/bio/Biodegradable'
import NoBiodegradable from './pages/bio/NoBiodegradable'
let router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path :'/producto',
    element: <Dashboard />,
    children: [
      {
        path:'biodegrabables',
        element: <Biodegradable />
      },
      {
        path:'nobiodegradables',
        element: <NoBiodegradable />

      }
    ]
  },
  {
    path: '/contacto',
    element: <Contact />
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} /> 
  </StrictMode>,
)
