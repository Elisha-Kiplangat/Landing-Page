import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LandingPage from './pages/LandingPage.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './pages/Error.tsx'
// import Register from './pages/Register.tsx'
// import Contact from './pages/Contact.tsx'
// import Dashboard from './pages/Dashboard.tsx'
// import Users from './components/dashboard/Users.tsx'
// import UserProfiles from './components/dashboard/UserProfiles.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement:<Error/>,
  }

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
