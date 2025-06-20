import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./global.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Login from "./pages/login.jsx"
import Home from "./pages/home.jsx"
import Usuario from "./pages/usuarios.jsx"
import ProductList from "./pages/produtos.jsx"
import Relatorios from "./pages/relatorios.jsx"
import Vendas from "./pages/vendas.jsx"
import { AuthProvider } from "./context/AuthContext"
import PrivateRoute from "./components/PrivateRoute.jsx"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <PrivateRoute />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/usuarios", element: <Usuario /> },
      { path: "/produtos", element: <ProductList /> },
      { path: "/relatorio-financeiro", element: <Relatorios /> },
      { path: "/relatorio-estoque", element: <Relatorios /> },
      { path: "/vendas", element: <Vendas /> },
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
