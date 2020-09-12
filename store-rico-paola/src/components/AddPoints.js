import React, { useEffect, useContext, useState } from "react";
import '../App.css';
import { consumeService } from "../data/networkService";
import { AppContext } from "../context/contextProvider";

function AddPoints(){
  const addPoints= [1000,5000,7500];
    const [selectPoint,setSelectPoint] = useState(addPoints[0]);
    const [messagepoints, setMessagepoints] = useState("")
    const {user:{name,points}, setUser} = useContext(AppContext);
    const handleAddPoint = ()=>{
        consumeService({ endpoint:"/user/points", method:"POST", body:{ "amount": selectPoint} }).then((res) => 
          {
            setUser({name:name, points:res["New Points"]})
            setMessagepoints(res.message)
          }
        );
    }
  return(
    <React.Fragment>
      <h1>Agregar Putitos</h1>
            {addPoints.map((i) => <button onClick={()=>(setSelectPoint(i))}>{i}</button>)}
             {selectPoint} <br></br>{messagepoints}
             <button onClick={()=>(handleAddPoint())}>Add</button>
    </React.Fragment>
  )
}


export default AddPoints;
