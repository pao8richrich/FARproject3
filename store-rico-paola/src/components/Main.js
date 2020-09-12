import React, { useState } from 'react';
import Filter from '../components/Filter'
import Cards from './Cards'
import AddPoints from './AddPoints'
import { useLocation } from 'react-router-dom'
// import CardHistory from './CardHistory'
// import Card from './Card'
// import IconCoin from '../assets/icons/coin.svg';
// import ImgCard from '../assets/product-pics/iPhone8-x2.png';
import '../App.css';
import { Switch, Route } from "react-router-dom";

function Main(){    
    const [filter, setFilter] = useState("Select all");
    const [sortby, setSort] = useState("");
 
    const showFilter = !useLocation().pathname.includes("addpoints");
    return(
        <React.Fragment>
            <main>
                {showFilter &&  <Filter  setFilter={setFilter} setSort={setSort} sortby={sortby}></Filter>}
                
                <Switch>
                  
                    
                    <Route
                        path="/FARproject3"
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
                        path="/FARproject3/historial"
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
                    <Route
                        path="/FARproject3/addpoints"
                        render={() => {
                            return (
                                <AddPoints/>
                            );
                        }}
                    />
                   
                </Switch>
               
                
            </main>
        </React.Fragment>
    )

}
export default Main;