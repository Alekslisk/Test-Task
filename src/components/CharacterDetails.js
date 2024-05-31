import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCharacter, getCharacters } from '../services/api';
import Spinner from './Spinner';
import '../styles/CharacterDetails.css';

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCharacter(id).then(response => {
      setTimeout(() => {
        setCharacter(response.data);
        setLoading(false);
      }, 2000); 
    });
  }, [id]);

  useEffect(() => {
    if (character) {
      getCharacters().then(response => {
        const relatedCharacters = response.data.results.filter(c =>
          c.species === character.species &&
          c.status === character.status &&
          c.gender === character.gender &&
          c.id !== character.id
        );
        setRecommendations(relatedCharacters.slice(0, 5));
      });
    }
  }, [character]);

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

  if (loading) {
    return <Spinner />;
  }


  return (
    <div className="container mt-4">
      <div className="card mb-4 character-card">
        <img src={character.image} className="card-img-top" alt={character.name} />
        <div className="card-body text-center">
          <h2 className="card-title">{character.name}</h2>
          <p className={`card-text ${getStatusClass(character.status)}`}>Status: {character.status}</p>
          <p className="card-text">Species: {character.species}</p>
          <p className="card-text">Gender: {character.gender}</p>
          <p className="card-text">Origin: {character.origin.name}</p>
        </div>
      </div>
      <div className="row recommendations">
        {recommendations.map(recommendation => (
          <div key={recommendation.id} className="col-md-4 mb-4">
            <Link to={`/character/${recommendation.id}`} className="card h-100 recommendation-card">
              <img src={recommendation.image} className="card-img-top" alt={recommendation.name} />
              <div className="card-body text-center">
                <p className="card-text">{recommendation.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterDetails;
