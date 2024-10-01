import React from 'react';
import './ActorList.css'; 
import ActorCard from './ActorCard';
import { useFetchActorsQuery } from '../api/slices/actorSlice'; 

const ActorList = () => {
  const { data: actors, error, isLoading } = useFetchActorsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading actors.</p>;

  const middleIndex = Math.ceil(actors?.results.length / 2);
  const leftActors = actors?.results.slice(0, middleIndex);
  const rightActors = actors?.results.slice(middleIndex);

  return (
    <div className="actor-list">
      <h1 className="actor-list-title">Star Wars Actors</h1>
      <div className="columns-container">
        <div className="column">
          {leftActors.map((actor) => (
            <ActorCard key={actor.name} actor={actor} />
          ))}
        </div>
        <div className="column">
          {rightActors.map((actor) => (
            <ActorCard key={actor.name} actor={actor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActorList;
