import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import Home from './pages/home.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/login.jsx";
import Usuario from './pages/usuarios.jsx';
import ProductList from './pages/produtos.jsx';
import Relatorios from './pages/relatorios.jsx';
import Vendas from './pages/vendas.jsx';

const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/usuarios', element: <Usuario /> },
    { path: '/produtos', element: <ProductList /> },
    { path: '/relatorio-financeiro', element: <Relatorios />  },
    { path: '/relatorio-estoque', element: <Relatorios />  },
    { path: '/vendas', element: <Vendas />  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
