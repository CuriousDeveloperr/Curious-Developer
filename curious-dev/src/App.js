import React from 'react';

import Navbar from './view/Navbar/Navbar';

import LandingPage from './view/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

    <LandingPage />
     
    </div>
  );
}

export default App;
