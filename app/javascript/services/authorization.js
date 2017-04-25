import Cookies from '../mixins/cookies';
import Session from '../mixins/sessionUtils';
import User from './user';

const AUTH_TOKEN_HEADER = 'x-auth-token';
const TOKEN_KEY = 'auth-token';
const Authorization = {
  setToken: (response) => {
    if(response) {
      Cookies.set(TOKEN_KEY, response.getResponseHeader(AUTH_TOKEN_HEADER));
    }
  },

  getToken: () => Cookies.get(TOKEN_KEY),

  clearToken: () => Cookies.remove(TOKEN_KEY),

  redirectIfLoggedIn: (nextState, replace) => {
    if(_.isFunction(replace) && User.isLoggedIn()) {
      replace({ nextPathname: nextState.location.pathname }, '/splash-screen');
    }
  },

  redirectIfLoggedOut: (nextState, replace) => {
    if(_.isFunction(replace) && !User.isLoggedIn()) {
      replace({ nextPathname: nextState.location.pathname }, '/MyNetmagic');
    }
  }
};

export default Authorization;
