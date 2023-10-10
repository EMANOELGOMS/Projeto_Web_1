import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetPlayerInfo = ({ searchQuery, onAdicionarFavorito }) => {
  const [players, setPlayers] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = '3e0a856bd02675eba4ca1a26f3c5a98dbc1b1118c44f1dac567623de4af6e24a';
        const apiUrl = `https://apiv3.apifootball.com/?action=get_players&player_name=${searchQuery}&APIkey=${apiKey}`;

        const response = await axios.get(apiUrl);
        const filteredPlayers = response.data.map(player => ({
          nome: player.player_name,
          time: player.team_name,
          foto: player.player_image,
          nacionalidade: player.player_country,
          qtdGolsMarcados: player.player_goals,
          posicao: player.player_type
        }));
        setPlayers([])
        setPlayers(filteredPlayers);

      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    if (searchQuery) {
      fetchData();
    } else {

      setPlayers([]);
    }

  }, [searchQuery]);


  return (
    <div className="player-info">
      {players.map(player => (
        <div key={player.nome} className="player-card">
          <h1>Jogador</h1>
          <p className="nomeJogador">Nome: {player.nome}</p>
          <p>Time: {player.time}</p>
          {player.foto && <img src={player.foto} alt={player.nome} className="player-image" />}
          <p>Posição: {player.posicao}</p>
          <p>Nacionalidade: {player.nacionalidade}</p>
          <p>Gols marcados: {player.qtdGolsMarcados}</p>
          <button onClick={() => {
            onAdicionarFavorito(player);
          }}>
            Adicionar aos Favoritos
          </button>
        </div>
      ))}
    </div>
  );
};

export default GetPlayerInfo;
