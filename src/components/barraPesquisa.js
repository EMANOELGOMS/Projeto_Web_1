import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [playerName, setPlayerName] = useState('');

  const handleInputChange = event => {
    setPlayerName(event.target.value);
  };

  const handleSearch = () => {
    onSearch(playerName);
  };

  return (
    <div>
      <input className='barraPesquisa' type="text" value={playerName} onChange={handleInputChange} />
      <button className='botao' onClick={handleSearch}>Pesquisar</button>
    </div>
  );
};

export default SearchBar;