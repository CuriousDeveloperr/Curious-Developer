import React from 'react';
import {Routes, Route} from 'react-router-dom'

import Navbar from './view/Navbar/Navbar';

import LandingPage from './view/LandingPage/LandingPage';
import GuidesPage from './view/Guides/GuidesPage';

function App() {
  return (
    <div className="App">
      <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/guides" element={<GuidesPage />} />
    </Routes>
    </div>
  );
}

export default App;
