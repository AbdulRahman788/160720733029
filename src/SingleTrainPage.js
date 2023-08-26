import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SingleTrainPage() {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {

  }, [trainId]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Train Details</h1>
      <h2>{train.name}</h2>
      <p>Departure: {train.departureTime}</p>
      <p>Price (Sleeper): {train.prices.sleeper}</p>
      <p>Price (AC): {train.prices.ac}</p>
{}
    </div>
  );
}

export default SingleTrainPage;
