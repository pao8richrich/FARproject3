import React, { useEffect, useContext } from "react";
import logo from '../assets/aerolab-logo.svg';
import IconCoin from '../assets/icons/coin.svg';
import { consumeService } from "../data/networkService";
import { AppContext } from "../context/contextProvider";
import '../App.css';

const Header = () => {
    const {user:{name,points}, setUser} = useContext(AppContext);
    
    useEffect(() => {
        consumeService({ endpoint:"/user/me", method:"GET" }).then((res) => setUser(res));
      }, [setUser]);

    return(
        <React.Fragment>
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="ItemsHeaderRight">
                <div className="nameUser">{name} </div>
                <div className="coinBg">
                <div className="TextCoin" >{points}  </div>
                <img src={IconCoin} className="" alt="IconCoin" />
                
                </div>
                
            </div>
            </header>
        </React.Fragment>
    )

}
export default Header;