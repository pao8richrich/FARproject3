import React from "react";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";
import  News  from "../containers/News" ;

const SearchMenu = ({ defaultUser, onGet, onGetDate }) => {
  let _input;
  const formatDate = (date) =>{
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
    let d = new Date(date).toLocaleString("es-CO", options);
    return (
      <span>
        {d}
      </span>
    )
  }
  return (
    <React.Fragment>
      <div className="navMenu">
        <ul>
          
          <Link className="input-group-prepend" to="/home">
            <li
              className="item"
              type="button"
            >
              Inicio
            </li>
          </Link>
          <Link className="input-group-prepend" to="/news/category/Política">
          <li
            className="item"
            type="button"
          >
            Política
           </li>
        </Link>
       <Link className="input-group-prepend" to="/news/category/Internacionales">
          <li
            className="item"
            type="button"
          >
            Internacionales
           </li>
        </Link>
       <Link className="input-group-prepend" to="/news/category/Tecnología">
          <li
            className="item"
            type="button"
          >
            Tecnología
           </li>
        </Link>
       <Link className="input-group-prepend" to="/news/category/Espectáculos">
          <li
            className="item"
            type="button"
          >
            Espectáculos
           </li>
        </Link>
       <Link className="input-group-prepend" to="/news/category/Deportes">
          <li
            className="item"
            type="button"
          >
            Deportes
           </li>
        </Link>
       <Link className="input-group-prepend" to="/news/category/Diseño">
          <li
            className="item"
            type="button"
          >
            Diseño
           </li>
        </Link>
        
        </ul>

       

      </div>
    </React.Fragment>
  );
};

SearchMenu.propTypes = {
  defaultUser: PropTypes.string,
  onGet: PropTypes.func,
  onGetDate: PropTypes.func
};

export default SearchMenu;
