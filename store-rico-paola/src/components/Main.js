import React, { useState } from 'react';
import Filter from '../components/Filter'
import Cards from './Cards'
// import CardHistory from './CardHistory'
// import Card from './Card'
// import IconCoin from '../assets/icons/coin.svg';
// import ImgCard from '../assets/product-pics/iPhone8-x2.png';
import '../App.css';
import { Switch, Route } from "react-router-dom";

function Main(){    
    const [filter, setFilter] = useState("Select all");
    const [sortby, setSort] = useState("");
    return(
        <React.Fragment>
            <main>
                <Filter  setFilter={setFilter} setSort={setSort} sortby={sortby}></Filter>
                
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
                                filter={filter}
                                sortby={sortby}
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
                                filter={filter}
                                sortby={sortby}
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