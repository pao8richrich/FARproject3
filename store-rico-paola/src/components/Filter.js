import React from 'react';
import '../App.css';

function Filter(){

    return(
        <React.Fragment>
                <div className="infoSearch">
                    <div className="infoTitle">Sort by</div>
                    <button className="btn active">Most recent </button>
                    <button className="btn ">Lowest prince</button>
                    <button className="btn ">Highest  price</button>
                

                    <div className="infoTitle">Filter by</div>
                    <div className="select">
                        <select>
                            <option>First select</option>
                            <option>Option</option>
                            <option>Option</option>
                        </select>
                        <div className="select__arrow"></div>
                        </div>
                        <div className="select">
                        <select>
                            <option>First select</option>
                            <option>Option</option>
                            <option>Option</option>
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