import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Homepage from './components/Homepage'
import Design from './components/Design'
import Navigation from './components/Navigation.jsx'
import Footer from './components/Footer.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navigation/><App /></>
  },
  {
    path: "/page2",
    element: <><Navigation/><Homepage /></>
  },
  {
    path: "/designpage",
    element: <><Navigation/><Design /></>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Footer></Footer>
  </StrictMode>,
)
