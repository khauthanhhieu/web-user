// authReducer.js

import { SET_CURRENT_USER, LOGIN } from '../actions/types';
import isEmpty from '../is-empty';

const initialState = {
  isAuthenticated: false,
  user: undefined
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }
    case LOGIN:
      return {
        ...state,
        isAuthenticated: action.user ? action.role : false,
        user: action.user,
      }
    default:
      return state;
  }
}