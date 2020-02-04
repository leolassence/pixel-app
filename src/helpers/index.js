function isCurrentUserPost(props) {
  const { isLoggedIn, post } = props;

  const currentUser = localStorage.getItem('username');

  if (isLoggedIn && post.username === currentUser) {
    return true;
  }

  return false;
}


module.exports = {
  isCurrentUserPost
};
