import { connect } from "react-redux";
import { getNews, getNewsDate } from "../actions";
import SearchMenu from "../components/SearchMenu";

const mapStateToProps = (state, ownProps) => ({
  defaultUser: ownProps.user
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGet: (input) => dispatch(getNews(input)),
  onGetDate: (input) => dispatch(getNewsDate(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchMenu);
