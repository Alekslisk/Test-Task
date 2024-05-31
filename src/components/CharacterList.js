import React, { useEffect, useState } from 'react';
import { getCharacters } from '../services/api';
import CharacterCard from './CharacterCard';
import '../styles/CharacterList.css';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then(response => {
      setCharacters(response.data.results);
    });
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
