import React from 'react';

const CardAtleta = ({ atleta, onAdicionarFavorito }) => {
  const handleClick = () => {
    onAdicionarFavorito(atleta);
  };

  return (
    <div className="card">
      {atleta.imagem && <img src={atleta.imagem} alt={atleta.nome} />}
      <h3>{atleta.nome}</h3>
      <button onClick={handleClick}>Adicionar aos Favoritos</button>
    </div>
  );
};

export default CardAtleta;
