import React from 'react';

const PainelFavoritos = ({ favoritos }) => {
  return (
    <div>
      <h2>Painel de Favoritos</h2>
      {favoritos.map((atleta, index) => (
        <div key={index}>
          {/* Aqui, use atleta.foto e atleta.nome */}
          <img src={atleta.foto} alt={atleta.nome} />
          <p>{atleta.nome}</p>
        </div>
      ))}
    </div>
  );
};

export default PainelFavoritos;
