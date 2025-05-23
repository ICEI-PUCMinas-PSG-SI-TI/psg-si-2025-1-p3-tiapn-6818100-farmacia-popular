import React from 'react';
function Cadastro() {
  return (
    <div style={{
      margin: 0,
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(to right, #e6f1fb, #a8d0f0)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <div style={{
        background: '#e6f1fb',
        border: '5px solid white',
        borderRadius: '15px',
        padding: '40px 30px',
        width: '320px',
        position: 'relative',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          content: '""',
          position: 'absolute',
          top: '-35px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'white',
          border: '5px solid #e6f1fb',
          borderRadius: '50%',
          width: '70px',
          height: '70px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}></div>
        <div style={{
          content: '"+"',
          position: 'absolute',
          top: '-22px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'red',
          fontSize: '40px',
          fontWeight: 'bold'
        }}>+</div>

        <h2 style={{
          textAlign: 'center',
          color: '#1e1e2f',
          marginTop: '30px',
          marginBottom: '20px',
          fontSize: '24px'
        }}>Cadastrar</h2>

        <form>
          <label htmlFor="nome" style={labelStyle}>Nome</label>
          <input type="text" id="nome" name="nome" placeholder="Digite o nome" required style={inputStyle} />

          <label htmlFor="cargo" style={labelStyle}>Cargo</label>
          <select id="cargo" name="cargo" required style={inputStyle}>
            <option value="">Selecionar</option>
            <option value="medico">Médico</option>
            <option value="enfermeiro">Enfermeiro</option>
            <option value="recepcionista">Recepcionista</option>
          </select>

          <label htmlFor="senha" style={labelStyle}>Senha</label>
          <input type="password" id="senha" name="senha" placeholder="Digite a senha" required style={inputStyle} />

          <label htmlFor="ativo" style={labelStyle}>Ativo</label>
          <select id="ativo" name="ativo" required style={inputStyle}>
            <option value="">Selecionar</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '25px'
          }}>
            <button type="button" style={{
              backgroundColor: '#c62828',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#b71c1c'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#c62828'}
            >
              Cancelar
            </button>
            <button type="submit" style={{
              backgroundColor: '#f0f0f0',
              color: '#333',
              border: '1px solid #ccc',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#e0e0e0'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#f0f0f0'}
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const labelStyle = {
  display: 'block',
  marginTop: '15px',
  marginBottom: '5px',
  fontWeight: 'bold',
  color: '#333'
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '5px',
  border: '1px solid #ccc',
  borderRadius: '5px'
};

export default Cadastro;
