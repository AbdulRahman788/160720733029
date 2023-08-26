import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage'; 
import TrainDetailsPage from './TrainDetailsPage'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
{}
        </header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/train/:id" component={TrainDetailsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
