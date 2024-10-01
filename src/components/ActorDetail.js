import React from 'react';

const ActorDetail = ({ actor }) => {
  return (
    <div className="actor-detail">
      <h2>Details for {actor.name}</h2>
      <p>Height: {actor.height}</p>
      <p>Birth Year: {actor.birth_year}</p>
     {/* will add later  */}
    </div>
  );
};

export default ActorDetail;
