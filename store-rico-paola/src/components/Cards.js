import React, { useState, useEffect } from 'react';
import IconCoin from '../assets/icons/coin.svg';
import ImgCard from '../assets/product-pics/iPhone8-x2.png';
// import Card from '../components/Card'
import '../App.css';
import { consumeService } from '../data/networkService';
// import { render } from '@testing-library/react';

const Cards =({id,filter, sort })=>{
    const [items, setItems]= useState([])

    useEffect(()=> {
        consumeService({endpoint:"/products",method:"GET"}).then((res)=> setItems(res))
},[]);

console.log("id", id )
if(id==="Inicio"){
    return(
        <React.Fragment>
            <div className="cards">
                <div className="box">
                    {items.filter((element)=>(filter === "Select all" || element.category === filter )).map((item, i) => (
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
                                        <div className="nameCard">{item.cost}</div>
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
} else{
    return(
        <React.Fragment>
            <div className="cards">
                <div className="box2">
                    {items.map((item, i) => (
                        // <Card key={i} item={item} />

                        // <div id="card-container" key={i}>
                        //     <h1>Historial</h1>
                        //     <div id="card2"  className="card">
                        //         <div className="front face">
                        //             <div className="imgCard">
                        //                 <img src={item.img.url}  className="" alt="Product" />
                        //                 <div className="iconBuy"></div>
                        //             </div>
                        //             <div className="infoCard">
                        //                 <div className="lineCard"></div>
                        //                 <div className="categoryCard">{item.category} </div>
                        //                 <div className="nameCard"> {item.name}</div>
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div>
                        

                        <div className="blog-card" key={i}>
                        <div className="meta">
                          <div className="photo">
                          <img src={item.img.url}  className="imgHistorial" alt="Product" />
                          </div>
                          <ul className="details">
                            <li className="author">Historial</li>
                           
                            
                          </ul>
                        </div>
                        <div className="description">
                          <h1>{item.category}</h1>
                          <h2>{item.name}</h2>
                          <p> <img src={IconCoin} className="cardCoinBack" alt="IconCoin" /> {item.cost}</p>
                         
                        </div>
                      </div>






                    ))}
             
                </div>
            </div>
        </React.Fragment>
    )
}

   

}
export default Cards;