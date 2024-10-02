import React, { useState } from 'react';
import './ActorList.css'; 
import ActorCard from './ActorCard';
import ActorDetail from './ActorDetail';  // Import the ActorDetail component
import { useFetchActorsQuery } from '../api/slices/actorSlice';

const ActorList = () => {
  const { data: actors, error, isLoading } = useFetchActorsQuery();
  const [selectedActor, setSelectedActor] = useState(null); // State for selected actor

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading actors.</p>;

  const handleActorSelect = (actor) => {
    setSelectedActor(actor); // Set the selected actor when the "Detail" button is clicked
  };

  const middleIndex = Math.ceil(actors?.results.length / 2);
  const leftActors = actors?.results.slice(0, middleIndex);
  const rightActors = actors?.results.slice(middleIndex);

  return (
    <div className="actor-list">
      <h1 className="actor-list-title">Star Wars Actors</h1>
      <div className="columns-container">
        <div className="column">
          {leftActors.map((actor) => (
            <ActorCard key={actor.name} actor={actor} onSelect={() => handleActorSelect(actor)} />
          ))}
        </div>
        <div className="column">
          {rightActors.map((actor) => (
            <ActorCard key={actor.name} actor={actor} onSelect={() => handleActorSelect(actor)} />
          ))}
        </div>
      </div>

      {/* Render ActorDetail component if an actor is selected */}
      {selectedActor && (
        <>
          <div className="overlay"></div> {/* Add the overlay */}
          <ActorDetail actor={selectedActor} onClose={() => setSelectedActor(null)} />
        </>
      )}
    </div>
  );
};

export default ActorList;
