export const loadingError = (bool) => ({
  type: "LOADING_ERROR",
  hasErrored: bool
});

export const loadingInProgress = (bool) => ({
  type: "LOADING_IN_PROGRESS",
  isLoading: bool
});

export const loadingSuccess = (news) => ({
  type: "LOADING_SUCCESS",
  news
});

export const clearNews = () => ({
  type: "CLEAR_NEWS"
});

export const getNews = (category) => {
  console.log(category);
  return (dispatch) => {
    dispatch(clearNews());

    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));


    fetch(`https://api.canillitapp.com/news/category/${category}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loadingInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((news) => 
      {dispatch(loadingSuccess(news.slice(0,10)))})
      .catch(() => dispatch(loadingError(true)));
      // .then((news) => dispatch(loadingSuccess(news)))
      // .catch(() => dispatch(loadingError(true)));
  };
};

export const getNewsDate = (date) => {
 
  console.log("mi fechita",date);
  return (dispatch) => {
    dispatch(clearNews());

    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));

    fetch(`https://api.canillitapp.com/latest/${date}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loadingInProgress(false));
        
        return response;
      })
      .then((response) => response.json())
      .then((news) =>{
        console.log("VER ESTO NOW" , news)
        dispatch(loadingSuccess(news.slice(0,10)))})
      .catch(() => dispatch(loadingError(true)));
      // dispatch(loadingSuccess(news)))
      // .catch(() => dispatch(loadingError(true)));
  };
};

export const getSearch = (key) => {
 
  return (dispatch) => {
    dispatch(clearNews());

    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));

    fetch(`https://api.canillitapp.com/search/${key}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loadingInProgress(false));
        
        return response;
      })
      .then((response) => response.json())
      .then((news) =>{
        console.log("VER ESTO NOW" , news)
        dispatch(loadingSuccess(news.slice(0,10)))})
      .catch(() => dispatch(loadingError(true)));
      // dispatch(loadingSuccess(news)))
      // .catch(() => dispatch(loadingError(true)));
  };
};