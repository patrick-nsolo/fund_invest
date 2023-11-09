import React from 'react';
import './App.css';
import Header from '../src/Components/Header/Header';
import Phonesection from './Components/PhoneSection/Phonesection';
import Risktolerance from './Components/Risktolerance/Risktolerance';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Low from './Components/Low/Low';
import Medium from './Components/Medium/Medium';
import High from './Components/High/High';

function App() {
  
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Phonesection />} />
          <Route path="/Low" element={<Low />} />
          <Route path="/Medium" element={<Medium />} />
          <Route path="/High" element={<High />} />
        </Routes>
      </div>
      <Risktolerance/>
    </Router>
    
  );
}

export default App;
