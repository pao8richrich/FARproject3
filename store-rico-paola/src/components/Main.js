import React from 'react';
import Filter from '../components/Filter'
import Cards from './Cards'
import Card from './Card'
import IconCoin from '../assets/icons/coin.svg';
import ImgCard from '../assets/product-pics/iPhone8-x2.png';
import '../App.css';

function Main(){    

    return(
        <React.Fragment>
            <main>
                <Filter></Filter>
                <Cards
                    render={(item) => <Card {...item}/>}
                />
                
            </main>
        </React.Fragment>
    )

}
export default Main;