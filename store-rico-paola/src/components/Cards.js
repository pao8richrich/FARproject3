import React, { useState, useEffect } from 'react';
import IconCoin from '../assets/icons/coin.svg';
import ImgCard from '../assets/product-pics/iPhone8-x2.png';
import Card from '../components/Card'
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
                    {items.map((element, i) => (
                        <Card key={element.i} element={element}>{render({ ...element })}</Card>
                    ))}
             
                </div>
            </div>
        </React.Fragment>
    )

}
export default Cards;