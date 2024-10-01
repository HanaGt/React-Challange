import React from 'react';

const ActorCard = ({ actor, onDetailClick }) => {
  return (
    <div className="actor-card">
      <h3>{actor.name}</h3>
      <p>Height: {actor.height}</p>
      <p>Birth Year: {actor.birth_year}</p>
      <button onClick={() => onDetailClick(actor)}>Detail</button>
    </div>
  );
};

export default ActorCard;
