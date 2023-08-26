import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function TrainDetailsPage() {
  const { id } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {

    axios.get(`https://api.example.com/train/${id}`)
      .then(response => {
        setTrain(response.data);
      })
      .catch(error => {
        console.error('Error fetching train details:', error);
      });
  }, [id]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Train Details</h2>
      <h3>{train.name}</h3>
      <p>Departure: {train.departureTime}</p>
      <p>Price (Sleeper): {train.prices.sleeper}</p>
      <p>Price (AC): {train.prices.ac}</p>
{ }
    </div>
  );
}

export default TrainDetailsPage;
