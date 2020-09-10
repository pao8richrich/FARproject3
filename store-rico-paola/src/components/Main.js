import React from 'react';
import Filter from '../components/Filter'
import Cards from './Cards'
// import CardHistory from './CardHistory'
// import Card from './Card'
// import IconCoin from '../assets/icons/coin.svg';
// import ImgCard from '../assets/product-pics/iPhone8-x2.png';
import '../App.css';
import { Switch, Route } from "react-router-dom";

function Main(){    

    return(
        <React.Fragment>
            <main>
                <Filter></Filter>

                <Switch>
                    {/* <Route exact path="/" component={Cards} />
                    <Route exact path="/historial" component={CardHistory} /> */}
                    
                    <Route
                        path="/"
                        exact
                        render={() => {
                            return (
                                <Cards
                                id="Inicio"
                                />
                            );
                        }}
                    />
                    <Route
                        path="/historial"
                        render={() => {
                            return (
                                <Cards
                                id="History"
                                />
                            );
                        }}
                    />
                   
                </Switch>
                {/* <Cards
                    render={(item) => <Card {...item}/>}
                /> */}
                
            </main>
        </React.Fragment>
    )

}
export default Main;