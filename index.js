import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicial from './pages/Inicial';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Usuarios from './pages/Usuarios';
import Produtos from './pages/Produtos';
import CadastroProduto from './pages/CadastroProdutos'; // Importar a página CadastroProduto

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/inicial" element={<Inicial />} />
        <Route path="/" element={<Login />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/produtos" element={<Produtos />} /> {/* Rota para Produtos */}
        <Route path="/cadastro-produto" element={<CadastroProduto />} /> {/* Rota para CadastroProduto */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
