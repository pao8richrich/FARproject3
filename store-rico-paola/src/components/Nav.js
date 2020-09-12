import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
function Nav(){

    return(
        <React.Fragment>
            <nav className="bgHeader">
                <div className="imgBgHeader">
                <div className="headertitle">  Electronics</div>
                    <Link className="linkRouter" to="/FARproject3">
                        Home
                    </Link>
                    <Link className="linkRouter" to="/FARproject3/historial">
                        History 
                    </Link>
                    <Link className="linkRouter" to="/FARproject3/addpoints">
                        Add points
                    </Link>
                </div>
            </nav>
        </React.Fragment>
    )

}
export default Nav;