// App.js
import React, { useState } from 'react';
import axios from 'axios';
import CardAtleta from './CardAtleta';
import PainelFavoritos from './PainelFavoritos';

const App = () => {
  const [atletas, setAtletas] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [nomeAtleta, setNomeAtleta] = useState('');

  const buscarAtletas = async () => {
    try {
      const response = await axios.get(
        `https://api-football-v1.p.rapidapi.com/v3/timezone=${nomeAtleta}`,
        {
          headers: {
            
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '2345b4b4a9mshb198b5fa5aaa695p1301ccjsna71208e5d008',
          },
        }
      );
      setAtletas(response.data);
    } catch (error) {
      console.error('Erro ao buscar atletas', error);
    }
  };

  const adicionarFavorito = (atleta) => {
    setFavoritos([...favoritos, atleta]);
  };

  return (
    <div>
      <h1>Pesquisa de Atletas</h1>
      <input
        type="text"
        placeholder="Nome do Atleta"
        value={nomeAtleta}
        onChange={(e) => setNomeAtleta(e.target.value)}
      />
      <button onClick={buscarAtletas}>Buscar</button>
      {atletas.map((atleta) => (
        <CardAtleta key={atleta.id} atleta={atleta} onAdicionarFavorito={adicionarFavorito} />
      ))}
      <PainelFavoritos favoritos={favoritos} />
    </div>
  );
};

export default App;
