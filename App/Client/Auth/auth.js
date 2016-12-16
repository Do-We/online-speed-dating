import {router} from '../Router/router.js'

// URL and endpoint constants
const API_URL = 'http://localhost:4321'
const LOGIN_URL = API_URL + '/auth/login'
const SIGNUP_URL = API_URL + '/auth/signup'

var auth = {
  // User object will let us check authentication status
  user: {
    isAuth: false
  },
  // Send a request to the login URL and save the returned JWT
  login(context, credentials, redirect) {
    context.$http.post(LOGIN_URL, credentials)
    .then((data) => {
      console.log('DATA ON LOGIN?', data);
      localStorage.setItem('id_token', data.body.id_token);
      console.log('this', this)
      this.user.isAuth = true;
      if(redirect) {
        console.log('redirect!', redirect)
        context.$router.push(redirect);      
      }
    })
    .catch((err) => {
      context.error = err;
    })
  },

  signup(context, credentials, redirect) {
    console.log("CRED",credentials)
    context.$http.post(SIGNUP_URL, credentials)
    .then((data) => {
      console.log('DATA ON SIGNUP?', data)
      localStorage.setItem('id_token', data.body.id_token);
      console.log('data.body.id_token', data.body.id_token)
      this.user.isAuth = true;
      if(redirect) {
        context.$router.push(redirect);        
      }
    })
    .catch((err) => {
      context.error = err
    })
  },

  // To log out, we just need to remove the token
  logout() {
    console.log("this.user", this.user)
    localStorage.removeItem('id_token');
    this.user.isAuth = false;
  },
  
  checkAuth() {
    var jwt = localStorage.getItem('id_token');
    if(jwt) {
      this.user.isAuth = true;
    }
    else {
      this.user.isAuth = false;      
    }
    console.log('checkAuth', this.user.isAuth, localStorage.getItem('id_token'));
  },
}

export default auth;