import React, { useState, useEffect, useContext } from 'react';
import IconCoin from '../assets/icons/coin.svg';
import ImgCard from '../assets/product-pics/iPhone8-x2.png';
import { consumeService } from "../data/networkService";
import { AppContext } from "../context/contextProvider";
import '../App.css';
import Modal from './Modal'

const Cards =({id ,filter, sortby })=>{

    const [ismodal,setIsmodal] = useState(false);
    const [items, setItems]= useState([])
    const [response, setResponse] = useState("")
    const {user:{name,points}, setUser} = useContext(AppContext);
    useEffect(()=> {
        consumeService({endpoint:"/products",method:"GET"}).then((res)=> setItems(res))
},[]);

const handleRedeem = (product) => {

    consumeService({ endpoint:"/redeem", method:"POST", body:{ "productId": product} }).then((res) => setResponse(res.message)).catch(setResponse("Error ayuda!"));
    setIsmodal(true);
    consumeService({ endpoint:"/user/me", method:"GET" }).then((res) => setUser(res) );
}

if(id==="Inicio"){
    return(
        <React.Fragment>
             {ismodal&&<Modal> {response}</Modal> }
            <div className="cards">
                <div className="box">
   

                    {items.filter((element)=>(filter === "Select all" || element.category === filter )).sort((a,b)=>((sortby === "Lowest price")?a.cost-b.cost:b.cost-a.cost)).map((item, i) => (
                        // <Card key={i} item={item} />

                        <div id="card-container" key={i}>
                          
                            <div id="card2"  className="card">
                                <div className="front face">
                                    <div className="imgCard">
                                        <img src={item.img.url}  className="" alt="Product" />
                                        <div className="iconBuy"></div>
                                       {(item.cost - points >0) && <div className="iconBuy">You need {item.cost  - points}</div>}
                                    </div>
                                    <div className="infoCard">
                                        <div className="lineCard"></div>
                                        <div className="categoryCard">{item.category} </div>
                                        <div className="nameCard"> {item.name}</div>
                                        <div className="nameCard">{item.cost}</div>
                                    </div>
                                </div>
                                <div className="back face ">
                                    <h1 className="price">  {item.cost} <img src={IconCoin} className="cardCoinBack" alt="IconCoin" />
                                    
                                    </h1>
                                    {(item.cost - points < 0) && <button className="btn btnRedeem" onClick={()=>(handleRedeem(item._id))}>Redeem Now</button>}
                                </div>
                            </div>
                        </div>





                    ))}
             
                </div>
            </div>
        </React.Fragment>
    )
} else{
    return(
        <React.Fragment>
            <div className="cards">
                <div className="box2">
                {items.filter((element)=>(filter === "Select all" || element.category === filter )).sort((a,b)=>((sortby === "Lowest price")?a.cost-b.cost:b.cost-a.cost)).map((item, i) => (
                        // <Card key={i} item={item} />

                        // <div id="card-container" key={i}>
                        //     <h1>Historial</h1>
                        //     <div id="card2"  className="card">
                        //         <div className="front face">
                        //             <div className="imgCard">
                        //                 <img src={item.img.url}  className="" alt="Product" />
                        //                 <div className="iconBuy"></div>
                        //             </div>
                        //             <div className="infoCard">
                        //                 <div className="lineCard"></div>
                        //                 <div className="categoryCard">{item.category} </div>
                        //                 <div className="nameCard"> {item.name}</div>
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div>
                        

                        <div className="blog-card" key={i}>
                        <div className="meta">
                          <div className="photo">
                          <img src={item.img.url}  className="imgHistorial" alt="Product" />
                          </div>
                          <ul className="details">
                            <li className="author">Historial</li>
                           
                            
                          </ul>
                        </div>
                        <div className="description">
                          <h1>{item.category}</h1>
                          <h2>{item.name}</h2>
                          <p> <img src={IconCoin} className="cardCoinBack" alt="IconCoin" /> {item.cost}</p>
                         
                        </div>
                      </div>






                    ))}
             
                </div>
            </div>
        </React.Fragment>
    )
}

   

}
export default Cards;