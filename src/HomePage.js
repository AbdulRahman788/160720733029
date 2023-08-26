import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomePage() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {

    axios.get('https://api.example.com/trains')
      .then(response => {
        setTrains(response.data);
      })
      .catch(error => {
        console.error('Error fetching train data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Train Schedule</h2>
      <ul>
        {trains.map(train => (
          <li key={train.id}>
            <Link to={`/train/${train.id}`}>{train.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
