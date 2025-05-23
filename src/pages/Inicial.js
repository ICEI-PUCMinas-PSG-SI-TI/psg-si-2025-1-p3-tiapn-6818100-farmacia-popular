import React from 'react';
import { useNavigate } from 'react-router-dom';

function Inicial() {
  const usuario = "Usuário (name)";
  const navigate = useNavigate();

  function handleCardClick(label) {
    if (label === 'Usuários') {
      navigate('/usuarios');
    }
  }

  return (
    <div style={bodyStyle}>
      <div style={containerStyle}>
        <h2>
          <span style={{ fontWeight: 500 }}>Bem vindo,</span>{' '}
          <span style={usuarioStyle}>{usuario}</span>
        </h2>

        <div style={gridStyle}>
          {cards.map((card, index) => (
            <div 
              key={index} 
              style={cardStyle} 
              onClick={() => handleCardClick(card.label)} 
              role="button"
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter') handleCardClick(card.label) }}
            >
              <img src={card.img} alt={card.alt} style={imgStyle} />
              <p style={textStyle}>{card.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const cards = [
  {
    img: 'https://img.icons8.com/?size=100&id=7820&format=png&color=000000',
    alt: 'Usuários',
    label: 'Usuários',
  },
  {
    img: 'https://img.icons8.com/ios-filled/100/000000/box--v1.png',
    alt: 'Produtos',
    label: 'Produtos',
  },
  {
    img: 'https://img.icons8.com/ios/100/000000/shopping-cart--v1.png',
    alt: 'Vendas',
    label: 'Vendas',
  },
  {
    img: 'https://img.icons8.com/ios/100/000000/combo-chart--v1.png',
    alt: 'Relatório Financeiro',
    label: 'Relatório Financeiro',
  },
  {
    img: 'https://img.icons8.com/ios-filled/100/000000/stack.png',
    alt: 'Relatório Estoque',
    label: 'Relatório Estoque',
  },
];

const bodyStyle = {
  background: 'linear-gradient(to right, #e3edf9, #a6d4f9)',
  padding: '40px',
  color: '#2b2b35',
  fontFamily: "'Inter', sans-serif",
  boxSizing: 'border-box',
  minHeight: '100vh',
};

const containerStyle = {
  maxWidth: '960px',
  margin: 'auto',
};

const usuarioStyle = {
  color: 'red',
  fontWeight: 'bold',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
  gap: '30px',
  marginTop: '40px',
};

const cardStyle = {
  backgroundColor: '#f0f6fc',
  border: '2px solid #e3eaf0',
  borderRadius: '10px',
  padding: '20px',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  cursor: 'pointer',
};

const imgStyle = {
  width: '60px',
  height: '60px',
  marginBottom: '15px',
};

const textStyle = {
  fontSize: '16px',
  fontWeight: 600,
};

export default Inicial;
