import { combineReducers } from 'redux';
import AuthentificationReducer from './reducerAuthentification';
import ErrorReducer from './reducerError';
import UserReducer from './reducerUser';

const rootReducer = combineReducers({
  authentification: AuthentificationReducer,
  errors: ErrorReducer,
  users: UserReducer
});

export default rootReducer;
