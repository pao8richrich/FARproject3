import React from 'react';
import logo from './assets/aerolab-logo.svg';
import IconCoin from './assets/icons/coin.svg';
import ImgCard from './assets/product-pics/iPhone8-x2.png';
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
        <div className="imgBgHeader">
        <div className="headertitle">  Electronics</div>
        </div>
      </nav>
      <main>
        <div className="infoSearch">
          <div className="infoTitle">Sort by</div>
           <button className="btn active">Most recent </button>
           <button className="btn ">Lowest prince</button>
           <button className="btn ">Highest  price</button>
          {/* 16 of 32 productos */}

          <div className="infoTitle">Filter by</div>
            <div className="select">
              <select>
                <option>First select</option>
                <option>Option</option>
                <option>Option</option>
              </select>
              <div className="select__arrow"></div>
            </div>
            <div className="select">
              <select>
                <option>First select</option>
                <option>Option</option>
                <option>Option</option>
              </select>
              <div className="select__arrow"></div>
            </div>
          <div className="arrows">
            <div className="arrowLeft" ></div>
            <div className="arrowRight" ></div>
          

          </div>
        </div>


        <div className="cards">
          {/* <div className="card">
            <div className="imgCard">
              <img src={ImgCard} className="" alt="IconCoin" />
              <div className="iconBuy"></div>
            </div>
            <div className="infoCard">
              <div className="lineCard"></div>
              <div className="categoryCard">Phone</div>
              <div className="nameCard">Marshall Major ll</div>
            </div>
          </div> */}
          <div className="box">
            <div id="card-container">
              <div id="card2"  className="card">
                <div className="front face">
                <div className="imgCard">
              <img src={ImgCard} className="" alt="IconCoin" />
              <div className="iconBuy"></div>
            </div>
            <div className="infoCard">
              <div className="lineCard"></div>
              <div className="categoryCard">Phone</div>
              <div className="nameCard">Marshall Major ll</div>
            </div>
                </div>
                <div className="back face ">
                  <h1 className="price">   12.000  <img src={IconCoin} className="cardCoinBack" alt="IconCoin" />
                
                  </h1>
                  <button className="btn btnRedeem">Redeem Now</button>
                </div>
              </div>
            </div>
            </div>

        </div>
      </main>

    </div>
  );
}

export default App;
