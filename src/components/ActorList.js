import React from 'react';
import { useFetchActorsQuery } from '../api/slices/actorSlice';
import ActorCard from './ActorCard';
import ActorDetail from './ActorDetail';

const ActorList = () => {
  const { data: actors, error, isLoading } = useFetchActorsQuery();
  const [selectedActor, setSelectedActor] = React.useState(null);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading actors.</p>;

  return (
    <div>
      <div className="actor-list">
        {actors?.results.map((actor) => (
          <ActorCard key={actor.name} actor={actor} onDetailClick={setSelectedActor} />
        ))}
      </div>
      {selectedActor && <ActorDetail actor={selectedActor} />}
      
    </div>
  );
};

export default ActorList;
