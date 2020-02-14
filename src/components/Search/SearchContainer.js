import { connect } from 'react-redux';
import SearchPage from './SearchPage';

const mapStateToProps = state => ({
  searchResults: state.search.searchResults,
});

export default connect(mapStateToProps, null)(SearchPage);
