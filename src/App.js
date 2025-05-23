// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TelaInicial from './pages/Inicial';
import Login from './pages/Login';
import Usuarios from './pages/Usuarios';
import CadastrarUsuario from './pages/Usuarios'; // se estiver usando

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/inicial" element={<TelaInicial />} />
        <Route path="/" element={<Login />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/cadastrar" element={<CadastrarUsuario />} />
      </Routes>
    </Router>
  );
}

export default App;
