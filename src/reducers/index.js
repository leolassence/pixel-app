import { combineReducers } from 'redux';
import AuthentificationReducer from './reducerAuthentification';
import ErrorReducer from './reducerError';
import UserReducer from './reducerUser';
import PostReducer from './reducerPost';

const rootReducer = combineReducers({
  authentification: AuthentificationReducer,
  errors: ErrorReducer,
  users: UserReducer,
  posts: PostReducer
});

export default rootReducer;
