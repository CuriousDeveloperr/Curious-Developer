import React from 'react';
import {Routes, Route} from 'react-router-dom'

import Navbar from './view/Navbar/Navbar';

import LandingPage from './view/LandingPage/LandingPage';
import GuidesLandingPage from './view/Guides/GuidesLandingPage';
import Web3 from './view/Guides/Web3/Web3_LandingPage';
import TailWindLandingPage from './view/Guides/TailWindCss/TailWindLanding';

function App() {
  return (
    <div className="App">
      <Navbar />
    <Routes>
      <Route path="/*" element={<LandingPage/>}/>
      <Route path='/guides' element={<GuidesLandingPage />} />
      
      <Route path="/guides/web3" element={<Web3 />} />
      <Route path="/guides/tailwindcss" element={<TailWindLandingPage />} />
    </Routes>
    </div>
  );
}

export default App;
