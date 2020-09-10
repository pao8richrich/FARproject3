import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
function Nav(){

    return(
        <React.Fragment>
            <nav className="bgHeader">
                <div className="imgBgHeader">
                <div className="headertitle">  Electronics</div>
                    <Link className="linkRouter" to="/">
                        Inicio
                    </Link>
                    <Link className="linkRouter" to="/historial">
                        Historial
                    </Link>
                </div>
            </nav>
        </React.Fragment>
    )

}
export default Nav;