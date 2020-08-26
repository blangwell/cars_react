import React from 'react';
import logo from './dumbassElon.png';
import './App.css';
import Tesla from './Tesla';
import Clowncar from './Clowncar'
import Peeweebike from './Peeweebike'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <br />
        <br />
        <a
          className="App-link"
          href="https://mronline.org/2020/05/27/elon-musk-is-a-shithead/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about classist piece of shit Elon Musk
        </a>
      </header>
      <Tesla />
      <Clowncar />
      <Peeweebike />
    </div>
  );
}

export default App;
