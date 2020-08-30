import React, { useState, useEffect } from 'react';
import IconCoin from '../assets/icons/coin.svg';
// import ImgCard from '../assets/product-pics/iPhone8-x2.png';
// import Card from '../components/Card'
import '../App.css';
import { consumeService } from '../data/networkService';
// import { render } from '@testing-library/react';

const Cards =({render})=>{
    const [items, setItems]= useState([])

    useEffect(()=> {
        consumeService({endpoint:"/products",method:"GET"}).then((res)=> setItems(res))
    },[items]);




    return(
        <React.Fragment>
            <div className="cards">
                <div className="box">
                    {items.map((item, i) => (
                        // <Card key={i} item={item} />

                        <div id="card-container" key={i}>
                            <div id="card2"  className="card">
                                <div className="front face">
                                    <div className="imgCard">
                                        <img src={item.img.url}  className="" alt="Product" />
                                        <div className="iconBuy"></div>
                                    </div>
                                    <div className="infoCard">
                                        <div className="lineCard"></div>
                                        <div className="categoryCard">{item.category} </div>
                                        <div className="nameCard"> {item.name}</div>
                                    </div>
                                </div>
                                <div className="back face ">
                                    <h1 className="price">  {item.cost} <img src={IconCoin} className="cardCoinBack" alt="IconCoin" />
                                    
                                    </h1>
                                    <button className="btn btnRedeem">Redeem Now</button>
                                </div>
                            </div>
                        </div>





                    ))}
             
                </div>
            </div>
        </React.Fragment>
    )

}
export default Cards;