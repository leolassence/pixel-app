function isOwner(isLoggedIn, username) {
  const currentUser = localStorage.getItem('username');

  return isLoggedIn && username === currentUser;
}

function redirectPathResolver(location) {
  const { from } = location.state || { from: { pathname: '/' } };

  return from;
}

module.exports = {
  isOwner,
  redirectPathResolver,
};
