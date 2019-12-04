import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

const myApp = combineReducers({
  errors: errorReducer,
  auth: authReducer,
});
export default myApp;
