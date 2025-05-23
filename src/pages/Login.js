import React, { useState } from 'react';

function Login() {
  const [matricula, setMatricula] = useState('');
  const [cargo, setCargo] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    if (!matricula || !cargo || !senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    alert(`Login realizado com sucesso!\nMatrícula: ${matricula}\nCargo: ${cargo}`);
  };

  return (
    <div style={bodyStyle}>
      <div style={containerStyle}>
        <div style={logoStyle}></div>
        <h1 style={tituloStyle}>ESTOQUE+</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="matricula" style={labelStyle}>Matrícula</label>
          <input
            type="text"
            id="matricula"
            name="matricula"
            required
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
            style={inputStyle}
          />

          <label htmlFor="cargo" style={labelStyle}>Cargo</label>
          <select
            id="cargo"
            name="cargo"
            required
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
            style={inputStyle}
          >
            <option value="">Selecionar</option>
            <option value="Administrador">Administrador</option>
            <option value="Enfermeiro">Enfermeiro</option>
            <option value="Médico">Médico</option>
            <option value="Farmacêutico">Farmacêutico</option>
          </select>

          <label htmlFor="senha" style={labelStyle}>Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>ENTRAR</button>
        </form>
      </div>
    </div>
  );
}

const bodyStyle = {
  margin: 0,
  padding: 0,
  background: 'linear-gradient(to bottom right, #e4f0f9, #a7d2f2)',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Arial, sans-serif',
};

const containerStyle = {
  backgroundColor: '#e8f5fd',
  borderRadius: '15px',
  padding: '40px 30px',
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
  width: '320px',
  textAlign: 'center',
  position: 'relative',
  border: '5px solid white',
};

const logoStyle = {
  position: 'absolute',
  top: '-40px',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: 'white',
  borderRadius: '50%',
  border: '3px solid #c20000',
  width: '70px',
  height: '70px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '45px',
  color: '#c20000',
  fontWeight: 'bold',
  content: '"+"',
};

const tituloStyle = {
  marginTop: '40px',
  fontSize: '24px',
  color: '#2c2c3e',
  fontWeight: 'bold',
};

const labelStyle = {
  display: 'block',
  textAlign: 'left',
  margin: '15px 0 5px',
  color: '#444',
  fontWeight: 500,
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '14px',
};

const buttonStyle = {
  marginTop: '25px',
  width: '100%',
  padding: '10px',
  backgroundColor: '#ffffff',
  border: '1px solid #ccc',
  borderRadius: '6px',
  fontSize: '15px',
  fontWeight: 'bold',
  cursor: 'pointer',
};

export default Login;
