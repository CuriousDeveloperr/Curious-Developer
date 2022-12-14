import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Footer from './view/Footer/Footer';

import Navbar from './view/Navbar/Navbar';

import LandingPage from './view/LandingPage/LandingPage';
import GuidesLandingPage from './view/Guides/GuidesLandingPage';
import Web3 from './view/Guides/Web3/Web3_LandingPage';
import TailWindLandingPage from './view/Guides/TailWindCss/TailWindLanding';

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />

    <div className="h-full w-full">
      <Routes>
        <Route path="/*" element={<LandingPage/>}/>
        <Route path='/guides' element={<GuidesLandingPage />} />

        <Route path="/guides/intro" element={<Web3 />} />
        <Route path="/guides/javascript" element={<TailWindLandingPage />} />
        <Route path="/guides/git" element={<p> Git Page</p>} />
      </Routes>
    </div>

      <Footer />
    </div>
  );
}

export default App;
