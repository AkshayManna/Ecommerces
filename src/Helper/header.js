import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';

let history = useHistory();

export function authHeader() {
    // return authorization header with jwt token
    if (localStorage.getItem('token')) {
      let token = (localStorage.getItem('token'));
      if (token) {
        const { exp } =  10;
        const expirationTime = (exp * 1000) - 60000
        if (Date.now() >= expirationTime) {
          localStorage.setItem('token', '');
          history.push('/Login')
          return {};
        }
      }
      if (token && token.access_token) {
        return { 'x-access-token': token};
      } else {
        return {};
      }
    }
    else {
      return {};
    }
  
  }