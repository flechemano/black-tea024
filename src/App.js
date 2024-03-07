import React from 'react';
import './App.css';
import LandingPageImage from './images/image1.jpg'; // Import the landing page image

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={LandingPageImage} alt="Landing Page Image" />
        <h1>Welcome to Black Tea Swap</h1>
        <p>
          This is the landing page for Black Tea Swap, a decentralized exchange (DEX) platform for trading tea-related assets.
        </p>
        <p>
          Get started by exploring our tea market, trading platform, and community features.
        </p>
        {/* Remove the following line if InternalImage is not needed */}
        {/* <img src={InternalImage} alt="Internal Image" /> */}
        <a
          className="App-link"
          href="http://68.183.150.222:3000/flechemano/black-tea"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Black Tea Swap
        </a>
      </header>
    </div>
  );
}

export default App;

