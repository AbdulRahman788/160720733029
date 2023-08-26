import React from 'react';

function TrainCard({ train }) {
  return (
    <div className="train-card">
      <h3>{train.name}</h3>
      <p>Departure: {train.departureTime}</p>
      <p>Price (Sleeper): {train.prices.sleeper}</p>
      <p>Price (AC): {train.prices.ac}</p>
      {/* */}
    </div>
  );
}

export default TrainCard;
