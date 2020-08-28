import React, {useEffect} from "react";
import PropTypes from "prop-types";
import newsDefault from "../img/notFound.svg";

const NewsList = ({ news, hasError, isLoading,onGet ,onGetDate,getSearch, match }) => {
  function formatDate() {    
    let date = new Date(),        
    month = '' + (date.getMonth() + 1),        
    day = '' + date.getDate(),        
    year = date.getFullYear();    
    if (month.length < 2)         
    month = '0' + month;    
    if (day.length < 2)         
    day = '0' + day;    
    return [year, month, day].join('-');
  }
  function formatDateNews(dateNews) {    
    let date = new Date(parseInt(dateNews+"000")),        
    month = '' + (date.getMonth() + 1),        
    day = '' + date.getDate(),        
    year = date.getFullYear();    
    if (month.length < 2)         
    month = '0' + month;    
    if (day.length < 2)         
    day = '0' + day;    

    return  [year, month, day].join('-');
  }
  useEffect( ()=>{
      // onGet(1)

      switch(match.params.category) {
        case "Home":
          onGetDate(formatDate()) 
          break;
        case "Política":
          onGet(1)
          break;
        case "Internacionales":
          onGet(2)
          break;
        case "Tecnología":
          onGet(3)
          break;
        case "Espectáculos":
          onGet(4)
          break;
        case "Deportes":
          onGet(5)
          break;
        case "Diseño":
          onGet(6)
          break;
        default:
          getSearch("cosita")
      }

    },[match.params.category]
  )
  


  if (hasError) {
    return (
      <div className="container">
        <h6 className="text-muted"> Sorry! There was an error loading the news.</h6>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="container">
          <div className="skype-loader">
            <div className="dot">
              <div className="first"></div>
            </div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        <h6 className="text-muted">Loading…</h6>


      </div>
    );
  }
  
  return (
    <div className="containerCard">
      {news.map((news, i) => (

        <div className="" key={i}>

            <div className="column">
              <div className="post-module">
                <div className="thumbnail">
                  
                  <img src={!!news.img_url ? news.img_url : newsDefault}
                        alt={news.title + '-img'}/>
                </div>
                <div className="post-content">
                  <div className="category">{news.category}</div>
                  
                  <div className="sub_title">  <a href={news.url} className="text-title" target="blank">
                  {news.title} </a></div>
                 
                  <div className="post-meta">
                    <span className="timestamp"><i className="fa fa-clock-"></i> {news.source_name} | </span>
                    <span className="comments"><i className="fa fa-comments">{formatDateNews(1598116652)}</i></span>
                  
                    </div>
                </div>
              </div>
            </div>










          
        </div>
      ))}
    </div>
  );
};

NewsList.propTypes = {
  news: PropTypes.array,
  hasError: PropTypes.bool,
  isLoading: PropTypes.bool,
  onGet: PropTypes.func
};

export default NewsList;
