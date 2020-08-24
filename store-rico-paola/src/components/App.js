import React, {useState} from "react";
import logo from '../img/logonews.svg';
import Search from "../containers/Search";
import News from "../containers/News";
import Home from "../containers/Home";
import '../styles.css';
import {   Route,
  Link,
  Switch,
  Redirect} from "react-router-dom";

const App = () => {
  const [inputValue,setInputValue] = useState("")
  return(
  <div className="App">
    <div className="infoHeader">
      <img src={logo} height="80"/>
      <div className="search">
        <form class="search-container" >
          <input id="search-box" type="text" class="search-box"  />
          <Link className="input-group-prepend" to={`/news/search/${document.getElementById("search-submit")}`}> 
            <input type="submit" id="search-submit" />
            
          </Link>
        </form>
      </div>
    </div>
 
    <div className="App-intro">
      <Search></Search>
      <Switch>
        <Route exact path="/home"  component={News} />
        <Route path="/search/:key" component={News}/>
        <Route path="/news/category/:category" component={News}/>
        {/* <Redirect to="/" /> */}
      </Switch>
    </div>
    
   
  </div>
)};

export default App;
