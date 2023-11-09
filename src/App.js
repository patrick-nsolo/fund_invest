import React from 'react';
import './App.css';
import Header from '../src/Components/Header/Header';
import Phonesection from './Components/PhoneSection/Phonesection';
import Risktolerance from './Components/Risktolerance/Risktolerance';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Low from './Components/Low/Low';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" exact component={Phonesection} />
          <Route path="/Low" exact component={Low} />
        </Routes>
        <Risktolerance/>
      </div>
    </Router>
    
  );
}

export default App;
