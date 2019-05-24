import React from 'react';
import Garden from './components/Garden/Garden';
import {HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Details from './components/Details/Details';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>Welcome to your garden!</h1>
    </header>
    <Router>
      <Route exact path='/' component={Garden} />
      <Route exact path='/details' component={Details} />
    </Router>
  </div>
);

export default App;
