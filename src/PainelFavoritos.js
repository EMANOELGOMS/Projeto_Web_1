import React from 'react';

const PainelFavoritos = ({ favoritos }) => {
  return (
    <div>
      <h2>Painel de Favoritos</h2>
      {favoritos.map((atleta) => (
        <div key={atleta.id}>
          <img src={atleta.imagem} alt={atleta.nome} />
          <p>{atleta.nome}</p>
        </div>
      ))}
    </div>
  );
};

export default PainelFavoritos;
