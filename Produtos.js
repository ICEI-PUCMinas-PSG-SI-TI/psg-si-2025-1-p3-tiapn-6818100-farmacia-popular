import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Produtos = () => {
  const navigate = useNavigate();

  const [produtos, setProdutos] = useState([
    {
      descricao: "Paracetamol 750mg",
      preco: 12.5,
      validade: "2026-02",
      laboratorio: "MedPharma",
      lote: "A204",
      estoque: "4/20",
    },
    {
      descricao: "Ibuprofeno 600mg",
      preco: 18.9,
      validade: "2026-02",
      laboratorio: "PharmaVida",
      lote: "B105",
      estoque: "4/20",
    },
  ]);

  const [busca, setBusca] = useState('');
  const [filtrados, setFiltrados] = useState(produtos);

  useEffect(() => {
    const resultado = produtos.filter(p =>
      p.descricao.toLowerCase().includes(busca.toLowerCase())
    );
    setFiltrados(resultado);
  }, [busca, produtos]);

  const formatarData = (data) => {
    const [ano, mes] = data.split("-");
    return `${mes}/${ano}`;
  };

  const adicionarProduto = () => {
    navigate('/cadastro-produto');
  };

  return (
    <div style={{ background: "linear-gradient(to bottom, #e6f2ff, #a3d3ff)", minHeight: "100vh", padding: "20px" }}>
      <div className="top-bar" style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
        <div style={{ background: "white", borderRadius: "15px", display: "flex", padding: "10px 20px", gap: "25px", alignItems: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <img src="https://img.icons8.com/ios-filled/50/home.png" alt="Home" width="24" />
          <img src="https://img.icons8.com/ios-filled/50/user.png" alt="Usuário" width="24" />
          <img src="https://img.icons8.com/ios-filled/50/plus-math.png" alt="Add" width="24" />
          <img src="https://img.icons8.com/ios-filled/50/shopping-cart.png" alt="Cart" width="24" />
          <img src="https://img.icons8.com/ios-filled/50/box.png" alt="Box" width="24" />
        </div>
      </div>

      <div className="container" style={{ maxWidth: "700px", background: "#e6f2ff", margin: "auto", padding: "20px", borderRadius: "10px" }}>
        <div className="header-bar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
          <div className="search-bar" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input
              type="text"
              placeholder="nome do produto"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              style={{ flex: 1, padding: "10px", borderRadius: "5px", border: "1px solid #aaa" }}
            />
            <button onClick={() => { }} style={{ background: "none", border: "none", fontSize: "18px", cursor: "pointer" }}>
              🔍
            </button>
          </div>
          <div className="add-btn" onClick={adicionarProduto} style={{ fontWeight: "bold", color: "#333", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }}>
            Adicionar Produto <img src="https://img.icons8.com/ios-filled/20/box.png" alt="box" />
          </div>
        </div>

        <div id="lista-produtos">
          {filtrados.map((p, i) => (
            <div key={i} className="product" style={{ background: "white", borderRadius: "10px", padding: "15px", marginBottom: "15px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
              <div className="product-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>✎</span>
                <span style={{ color: "green" }}>Preço de venda</span>
              </div>
              <div className="product-desc" style={{ marginTop: "8px", fontSize: "16px", fontWeight: "bold" }}>{p.descricao}</div>
              <div className="product-footer" style={{ marginTop: "10px", fontSize: "13px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>{p.laboratorio} Lote {p.lote} {formatarData(p.validade)}</span>
                <span style={{ fontWeight: "bold", color: "red" }}>Área do produto {p.estoque}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Produtos;
