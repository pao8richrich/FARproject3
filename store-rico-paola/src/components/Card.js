// import React, { useContext, useState } from "react";
import React  from 'react';
import IconCoin from '../assets/icons/coin.svg';
// import ImgCard from '../assets/product-pics/iPhone8-x2.png';
// import { consumeService } from '../data/networkService';
import '../App.css';

const Card = ({ _id, name, cost, category}) => {
    // const { user, setUser } = useContext(AppContext);
    console.log(category)
    // const [items, setItems]= useState([])

    // useEffect(()=> {
    //     consumeService({endpoint:"/products",method:"GET"}).then((res)=> setItems(res))
    // },[items]);

     
    return(
        <React.Fragment>
            <div id="card-container">
                <div id="card2"  className="card">
                    <div className="front face">
                        <div className="imgCard">
                            {/* <img src={url}  className="" alt="IconCoin" /> */}
                            <div className="iconBuy"></div>
                        </div>
                        <div className="infoCard">
                            <div className="lineCard"></div>
                            <div className="categoryCard">{category} </div>
                            <div className="nameCard"> {name}</div>
                        </div>
                    </div>
                    <div className="back face ">
                        <h1 className="price">  {cost} <img src={IconCoin} className="cardCoinBack" alt="IconCoin" />
                        
                        </h1>
                        <button className="btn btnRedeem">Redeem Now</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}
export default Card;