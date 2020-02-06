function isCurrentUserPost(props) {
  const { isLoggedIn, post } = props;

  const currentUser = localStorage.getItem('username');

  if (isLoggedIn && post.username === currentUser) {
    return true;
  }

  return false;
}

function redirectPathResolver(location) {
  const { from } = location.state || { from: { pathname: '/' } };

  return from;
}

module.exports = {
  isCurrentUserPost,
  redirectPathResolver
};
