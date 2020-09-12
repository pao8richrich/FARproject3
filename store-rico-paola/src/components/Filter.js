import React from 'react';
import '../App.css';
function Filter({setFilter, setSort, sortby}){

    const category=["Select all","Phones","Gamming","Laptops" , "Tablets & E-readers", "Audio", "Monitors & TV", "Smart Home","Home Accessories", "PC Accessories","Cameras" , "Drones"]
    
    return(
        <React.Fragment>
                <div className="infoSearch">
                    <div className="infoTitle">Sort by</div>
                    <button className={(sortby === "Lowest price")? "btn active": "btn"} onClick={()=>(setSort("Lowest price"))}>Lowest Price</button>
                    <button className={(sortby === "Highest Price")? "btn active": "btn"} onClick={()=>(setSort("Highest Price"))}>Highest Price</button>
                

                    <div className="infoTitle">Filter by</div>
                    <div className="select">
                        <select onChange={(event)=>(setFilter(event.target.value))}>
                            {category.map((i)=>(<option key={i}>{i}</option>))}
                        </select>
                        <div className="select__arrow"></div>
                        </div>
                        
                   

                </div>
        </React.Fragment>
    )

}
export default Filter;