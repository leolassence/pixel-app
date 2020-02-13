import { connect } from 'react-redux';
import PostForm from './PostForm';

const mapStateToProps = state => ({
  user: state.users.user
});

export default connect(mapStateToProps, null)(PostForm);
