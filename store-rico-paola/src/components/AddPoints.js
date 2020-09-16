import React, {  useContext, useState } from "react";
import '../App.css';
import { consumeService } from "../data/networkService";
import { AppContext } from "../context/contextProvider";

function AddPoints(){
  const addPoints= [1000,5000,7500];
    const [selectPoint,setSelectPoint] = useState(addPoints[0]);
    const [messagepoints, setMessagepoints] = useState("")
    const {user:{name}, setUser} = useContext(AppContext);
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
          <div className="CardPoints">
            <div className="CardTittle">Add Points </div>
            {addPoints.map((i) => <button className="btnPoints" onClick={()=>(setSelectPoint(i))}>{i}</button>)}
            
          <div className="selectPoint">   {selectPoint} </div>
          
             <button className="btnAdd" onClick={()=>(handleAddPoint())}>Add</button>

             <div className="messagepoints"> {messagepoints} </div>
          </div>
    </React.Fragment>
  )
}


export default AddPoints;
