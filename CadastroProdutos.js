import React, { useState, useEffect } from 'react';

function CadastroProduto() {
  const [formData, setFormData] = useState({
    descricao: '',
    validade: '',
    preco: '',
    estoque: '',
    lote: '',
    laboratorio: '',
  });

  useEffect(() => {
    const body = document.body.style;
    body.margin = '0';
    body.fontFamily = 'Arial, sans-serif';
    body.background = 'rgba(0, 0, 0, 0.5)';
    body.display = 'flex';
    body.justifyContent = 'center';
    body.alignItems = 'center';
    body.height = '100vh';

    return () => {
      body.margin = '';
      body.fontFamily = '';
      body.background = '';
      body.display = '';
      body.justifyContent = '';
      body.alignItems = '';
      body.height = '';
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dados = {
      descricao: formData.descricao,
      validade: formData.validade,
      preco: parseFloat(formData.preco),
      estoque: parseInt(formData.estoque, 10),
      lote: formData.lote,
      laboratorio: formData.laboratorio,
    };

    console.log("Produto cadastrado:", dados);
    alert("Produto cadastrado com sucesso!");

    setFormData({
      descricao: '',
      validade: '',
      preco: '',
      estoque: '',
      lote: '',
      laboratorio: '',
    });
  };

  const handleCancelar = () => {
    setFormData({
      descricao: '',
      validade: '',
      preco: '',
      estoque: '',
      lote: '',
      laboratorio: '',
    });
  };

  // Estilos inline para a modal e os elementos internos
  const styles = {
    modal: {
      background: 'linear-gradient(to bottom, #e0f0ff, #84c4ff)',
      borderRadius: '10px',
      width: '400px',
      padding: '30px',
      position: 'relative',
      boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
    },
    closeBtn: {
      position: 'absolute',
      top: '15px',
      right: '20px',
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#1a1a1a',
      cursor: 'pointer',
    },
    title: {
      textAlign: 'center',
      color: '#2a2a2a',
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      marginTop: '10px',
      fontWeight: 'bold',
      color: '#444',
      fontSize: '14px',
    },
    input: {
      width: '100%',
      padding: '8px',
      borderRadius: '5px',
      border: '1px solid #aaa',
      marginTop: '5px',
      boxSizing: 'border-box',
    },
    grid: {
      display: 'flex',
      gap: '10px',
      marginTop: '10px',
    },
    gridInput: {
      flex: 1,
    },
    buttons: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
    },
    cancelBtn: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      fontWeight: 'bold',
      cursor: 'pointer',
      backgroundColor: 'red',
      color: 'white',
    },
    submitBtn: {
      padding: '10px 20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontWeight: 'bold',
      cursor: 'pointer',
      backgroundColor: 'white',
      color: 'black',
    },
    submitBtnHover: {
      backgroundColor: '#f0f0f0',
    },
  };

  return (
    <div style={styles.modal}>
      <span
        style={styles.closeBtn}
        onClick={() => alert("Fechar modal (ação personalizada aqui)")}
        role="button"
        tabIndex={0}
        onKeyDown={e => { if (e.key === 'Enter') alert("Fechar modal (ação personalizada aqui)") }}
      >
        ✕
      </span>
      <h2 style={styles.title}>CADASTRAR PRODUTO</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="descricao" style={styles.label}>DESCRIÇÃO</label>
        <input
          type="text"
          id="descricao"
          name="descricao"
          value={formData.descricao}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <div style={styles.grid}>
          <div style={styles.gridInput}>
            <label htmlFor="validade" style={styles.label}>VALIDADE</label>
            <input
              type="date"
              id="validade"
              name="validade"
              value={formData.validade}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.gridInput}>
            <label htmlFor="preco" style={styles.label}>VALOR</label>
            <input
              type="number"
              step="0.01"
              id="preco"
              name="preco"
              value={formData.preco}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.gridInput}>
            <label htmlFor="estoque" style={styles.label}>ESTOQUE</label>
            <input
              type="number"
              id="estoque"
              name="estoque"
              value={formData.estoque}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
        </div>

        <div style={styles.grid}>
          <div style={styles.gridInput}>
            <label htmlFor="lote" style={styles.label}>LOTE</label>
            <input
              type="text"
              id="lote"
              name="lote"
              value={formData.lote}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.gridInput}>
            <label htmlFor="laboratorio" style={styles.label}>LABORATÓRIO</label>
            <input
              type="text"
              id="laboratorio"
              name="laboratorio"
              value={formData.laboratorio}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
        </div>

        <div style={styles.buttons}>
          <button type="button" style={styles.cancelBtn} onClick={handleCancelar}>
            Cancelar
          </button>
          <button
            type="submit"
            style={styles.submitBtn}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f0f0f0'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'white'}
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CadastroProduto;
