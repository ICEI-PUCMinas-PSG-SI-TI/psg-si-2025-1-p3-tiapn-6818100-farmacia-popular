import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import Home from './pages/home.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/login.jsx";
import Usuario from './pages/usuarios.jsx';

const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/usuarios', element: <Usuario /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
