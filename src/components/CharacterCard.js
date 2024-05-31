import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CharacterCard.css';

const CharacterCard = ({ character }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'Alive':
        return 'text-success';
      case 'Dead':
        return 'text-danger';
      default:
        return 'text-secondary';
    }
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card character-card h-100">
        <img src={character.image} className="card-img-top" alt={character.name} />
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <p className={`card-text ${getStatusClass(character.status)}`}>Status: {character.status}</p>
          <Link to={`/character/${character.id}`} className="btn btn-primary">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
