import { connect } from "react-redux";
import NewsList from "../components/NewsList";
import { getNews, getNewsDate,getSearch } from "../actions";

const mapStateToProps = (state) => ({
  news: state.news,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGet: (input) => dispatch(getNews(input)),
  onGetDate: (input) => dispatch(getNewsDate(input)),
  getSearch: (input) => dispatch(getSearch(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
