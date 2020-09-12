import React from 'react';
import '../App.css';

function Filter({setFilter}){

    const category=["Select all","Phones","Gamming","Laptops" , "Tablets & E-readers", "Audio", "Monitors & TV", "Smart Home","Home Accessories", "PC Accessories","Cameras" , "Drones"]

    return(
        <React.Fragment>
                <div className="infoSearch">
                    <div className="infoTitle">Sort by</div>
                    <button className="btn active ">Lowest prince</button>
                    <button className="btn ">Highest  price</button>
                

                    <div className="infoTitle">Filter by</div>
                    <div className="select">
                        <select onChange={(event)=>(setFilter(event.target.value))}>
                            {category.map((i)=>(<option>{i}</option>))}
                        </select>
                        <div className="select__arrow"></div>
                        </div>
                        
                    <div className="arrows">
                        <div className="arrowLeft" ></div>
                        <div className="arrowRight" ></div>
                    

                    </div>
                </div>
        </React.Fragment>
    )

}
export default Filter;