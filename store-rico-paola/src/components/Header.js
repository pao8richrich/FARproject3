import React, { useEffect, useContext, useState } from "react";
import logo from '../assets/aerolab-logo.svg';
import IconCoin from '../assets/icons/coin.svg';
import { consumeService } from "../data/networkService";
import { AppContext } from "../context/contextProvider";
import '../App.css';
// import Modal from './Modal'

const Header = () => {
    const addPoints= [1000,5000,7500];
    const [ismodal,setIsmodal] = useState(false);
    const [selectPoint,setSelectPoint] = useState(addPoints[0]);
    const {user:{name,points}, setUser} = useContext(AppContext);
    const handleAddPoint = ()=>{
        consumeService({ endpoint:"/user/points", method:"POST", body:{ "amount": selectPoint} }).then((res) => setUser({name:name, points:res["New Points"]}));
    }
    useEffect(() => {
        consumeService({ endpoint:"/user/me", method:"GET" }).then((res) => setUser(res));
    }, [setUser]);

    return(
        <React.Fragment>
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="ItemsHeaderRight" onClick={()=>setIsmodal(!ismodal)}>
                <div className="nameUser">{name} </div>
                <div className="coinBg">
                <div className="TextCoin" >{points}  </div>
                <img src={IconCoin} className="" alt="IconCoin" />
                
                </div>
                
            </div>

            {/* {ismodal&&<Modal> <h1>Agregar Putitos</h1>
            {addPoints.map((i) => <button onClick={()=>(setSelectPoint(i))}>{i}</button>)}
             {selectPoint}
             <button onClick={()=>(handleAddPoint())}>Add</button>
            </Modal> } */}
            </header>
        </React.Fragment>
    )

}
export default Header;