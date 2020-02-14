import { combineReducers } from 'redux';
import AuthentificationReducer from './reducerAuthentification';
import ErrorReducer from './reducerError';
import UserReducer from './reducerUser';
import PostReducer from './reducerPost';
import SearchReducer from './reducerSearch';

const rootReducer = combineReducers({
  authentification: AuthentificationReducer,
  errors: ErrorReducer,
  users: UserReducer,
  posts: PostReducer,
  search: SearchReducer,
});

export default rootReducer;
