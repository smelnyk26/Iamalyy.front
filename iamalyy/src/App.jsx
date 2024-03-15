import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login" component={<Login/>} />
      </Router>
    </div>
  );
}

export default App;