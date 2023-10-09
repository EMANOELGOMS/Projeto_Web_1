import React, { useState } from 'react';
import SearchBar from './components/barraPesquisa';
import GetPlayerInfo from './components/jogadorInfo';
import PainelFavoritos from './components/PainelFavoritos';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showPlayerInfo, setShowPlayerInfo] = useState(false);
   const [favoritos, setFavoritos] = useState([]);

  const handleSearch = query => {
    setSearchQuery(query);
    setShowPlayerInfo(true);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setShowPlayerInfo(false);
  };

  const adicionarFavorito = (atleta) => {
    setFavoritos([...favoritos, atleta]);
  };

  return (
    <div>
      <h1>Busca de jogadores</h1>
      <SearchBar onSearch={handleSearch} onClear={clearSearch} />
      {showPlayerInfo && <GetPlayerInfo searchQuery={searchQuery} onAdicionarFavorito={adicionarFavorito}/>}
      <hr></hr>
      <PainelFavoritos favoritos={favoritos}></PainelFavoritos>
    </div>
  );
};

export default App;
