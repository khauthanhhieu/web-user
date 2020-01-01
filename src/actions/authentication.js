import axios from 'axios';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { LOGIN, LOGOUT } from './types';
import setAuthToken from '../setAuthToken';

export function login(username, password, role) {
  return async (dispatch) => {
    let errors, user;
    const result = await axios.post(`/api/${role}/login`,
    {
      username,
      password,
    }).then(res => res.data)
    if (result.isSuccess == false) {
      errors = "Tên đăng nhập hoặc mật khẩu không đúng";

    } else {
      const profile = await axios.get('/api/profile',
        {headers : {token : result.token}}
      ).then(res => res.data)
      user = profile.user
    }
    dispatch({
      type: LOGIN, errors, user, role,
    })
  }
}

export function logout() {
  Cookies.remove('access_token');
  return { type: LOGOUT };
}