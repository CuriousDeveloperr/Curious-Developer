import React from 'react';
import {Routes, Route} from 'react-router-dom'

import Navbar from './view/Navbar/Navbar';

import LandingPage from './view/LandingPage/LandingPage';
import Web3 from './view/Guides/Web3_LandingPage';

function App() {
  return (
    <div className="App">
      <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/Web3" element={<Web3 />} />
    </Routes>
    </div>
  );
}

export default App;
