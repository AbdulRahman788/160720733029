import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrainCard from '../TrainCard';

function AllTrainsPage() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    
  }, []);

  return (
    <div>
      <h1>All Trains Schedule</h1>
      {trains.map((train) => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
}

export default AllTrainsPage;
