import React, { useState, useEffect, useContext } from 'react';
import IconCoin from '../assets/icons/coin.svg';
import { consumeService } from "../data/networkService";
import { AppContext } from "../context/contextProvider";
import '../App.css';
import Modal from './Modal'
import usePagination from './Pagination';
import imgProduct from '../assets/product.svg';

const Cards =({id ,filter, sortby })=>{

    const [ismodal,setIsmodal] = useState(false);
    const [items, setItems]= useState([])
    const [response, setResponse] = useState("")
    const {user:{points}, setUser} = useContext(AppContext);
    useEffect(()=> {
        consumeService({endpoint:(id=== "Inicio") ? "/products": "/user/history",method:"GET"}).then((res)=> setItems(res));
},[id]);
const handleRedeem = (product) => {

    consumeService({ endpoint:"/redeem", method:"POST", body:{ "productId": product} }).then((res) => setResponse(res.message));
    setIsmodal(true);
    consumeService({ endpoint:"/user/me", method:"GET" }).then((res) => setUser(res) );
}
const itemsFilter = items.filter((element)=>(filter === "Select all" || element.category === filter )).sort((a,b)=>((sortby === "Lowest price")?a.cost-b.cost:b.cost-a.cost));
const {next, prev, jump, currentData, currentPage } = usePagination(itemsFilter,16);

useEffect(()=> {
    jump(1);
},[filter,sortby,items]);





const handleClose = ()=>{
    setIsmodal(false);
  }

if(id==="Inicio"){
    
    return(
        <React.Fragment>
            <div className="arrows">
                <div className="arrowLeft" onClick={()=>(prev())}></div>
                <div className="arrowsText">{currentPage}</div>
                <div className="arrowRight" onClick={()=>(next())}></div>
            </div>
             {ismodal&&<Modal>
                <button  className="modal-close" onClick={()=>(handleClose())} > x </button>
                <div className="textModal">
                <img src={imgProduct} className="ProductModal" alt="Product Modal" />
                     {response}</div>      
           </Modal> }
            <div className="cards">
                <div className="box">
   

                    {currentData().map((item, i) => (
                        // <Card key={i} item={item} />

                        <div id="card-container" key={i}>
                          
                            <div id="card2"  className="card">
                                <div className="front face">
                                    <div className="imgCard">
                                        <img src={item.img.url}  className="" alt="Product" />
                                        <div className="iconBuy"></div>
                                       {(item.cost - points >0) && <div className="iconNeeded">You need  {item.cost  - points} <img src={IconCoin} className="IconCoin2" alt="IconCoin" />  </div>}
                                    </div>
                                    <div className="infoCard">
                                        <div className="lineCard"></div>
                                        <div className="categoryCard">{item.category} </div>
                                        <div className="nameCard"> {item.name}</div>
                                        <div className="nameCard"><img src={IconCoin} className="IconCoin2" alt="IconCoin" /> {item.cost}</div>
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
            <div className="arrows">
                        <div className="arrowLeft" onClick={()=>(prev())}></div>
                        {currentPage}
                        <div className="arrowRight" onClick={()=>(next())}></div>
                    </div>
            <div className="cards">
                <div className="box2">
                {currentData().map((item, i) => (
                       
                        

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