import React from 'react';
import { useNavigate } from 'react-router-dom';

function Usuarios() {
  const navigate = useNavigate();

  const usuarios = [
    { nome: 'Pedro Henrique Lafaiate', matricula: 'Matricula', cargo: 'Cargo' },
    { nome: 'Lana Luiza Carvalho', matricula: 'Matricula', cargo: 'Cargo' },
    { nome: 'Marta Silva', matricula: 'Matricula', cargo: 'Cargo' },
  ];

  function handleAddUser() {
    navigate('/cadastro');
  }

  return (
    <div style={bodyStyle}>
      <div style={navbarStyle}>
        <div style={navbarContentStyle}>
          <img src="https://img.icons8.com/ios-filled/50/home.png" alt="Home" />
          <img src="https://img.icons8.com/ios-filled/50/user.png" alt="User" />
          <div style={logoStyle}>+</div>
          <img src="https://img.icons8.com/ios-filled/50/shopping-cart.png" alt="Carrinho" />
          <img src="https://img.icons8.com/ios-filled/50/box.png" alt="Caixa" />
        </div>
      </div>

      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>Usuários</h2>
          <div 
            style={addBtnStyle} 
            onClick={handleAddUser} 
            role="button" 
            tabIndex={0}
            onKeyDown={e => { if (e.key === 'Enter') handleAddUser() }}
          >
            Adicionar Usuário
          </div>
        </div>

        {usuarios.map((user, index) => (
          <div key={index} style={cardStyle}>
            <h3 style={cardTitleStyle}>{user.nome}</h3>
            <div style={infoStyle}>{user.matricula}<br />{user.cargo}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Estilos (mantive como estavam no seu código original)
const bodyStyle = {
  margin: 0,
  fontFamily: 'Arial, sans-serif',
  background: 'linear-gradient(to right, #f1f9ff, #a3d6f8)',
  minHeight: '100vh',
};

const navbarStyle = {
  display: 'flex',
  justifyContent: 'center',
  padding: '20px 0',
};

const navbarContentStyle = {
  background: 'white',
  padding: '10px 30px',
  borderRadius: '15px',
  display: 'flex',
  gap: '40px',
  alignItems: 'center',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
};

const logoStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  background: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '5px solid red',
  color: 'red',
  fontSize: '30px',
  fontWeight: 'bold',
};

const containerStyle = {
  maxWidth: '800px',
  margin: '40px auto',
  background: 'rgba(255, 255, 255, 0.6)',
  borderRadius: '10px',
  padding: '20px',
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
};

const titleStyle = {
  margin: 0,
  color: '#333',
};

const addBtnStyle = {
  display: 'flex',
  alignItems: 'center',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: '18px',
};

const cardStyle = {
  background: '#f0f7fd',
  padding: '15px',
  borderRadius: '10px',
  marginBottom: '15px',
};

const cardTitleStyle = {
  margin: 0,
  fontSize: '18px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
};

const infoStyle = {
  marginTop: '5px',
  color: '#666',
  fontSize: '14px',
};

export default Usuarios;
