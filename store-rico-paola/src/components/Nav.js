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
                        Inicio
                    </Link>
                    <Link className="linkRouter" to="/FARproject3/historial">
                        Historial
                    </Link>
                </div>
            </nav>
        </React.Fragment>
    )

}
export default Nav;