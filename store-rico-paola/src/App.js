import React from 'react';
import logo from './assets/aerolab-logo.svg';
import IconCoin from './assets/icons/coin.svg';
// import bgHeader from './assets/header-x1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="ItemsHeaderRight">
          <div className="nameUser">Julio Col </div>
          <div className="coinBg">
            <div className="TextCoin" >600  </div>
            <img src={IconCoin} className="" alt="IconCoin" />
          
          </div>
          
        </div>
      </header>
      <nav className="bgHeader">
        <div className="imgBgHeader"></div>
      {/* <img src={bgHeader} className="" alt="bg" /> */}
      </nav>

    </div>
  );
}

export default App;
