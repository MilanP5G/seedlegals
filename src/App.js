import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Main from './components/main/Main';
import './App.css';

const App = () => {

  return (
    <Router>
      <div>
        <NavBar />
        <Main />
      </div>
    </ Router>
  )

}

export default App;
