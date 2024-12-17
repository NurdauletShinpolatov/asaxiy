import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import routes from './router'
import { RouterProvider } from 'react-router'
import './scss/global.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
