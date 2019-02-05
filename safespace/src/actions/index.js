import axios from 'axios';

export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const SIGNUP_USER_START = 'SIGNUP_USER_START';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';

const URL = 'https://lambda-safe-space.herokuapp.com';

export const signup = (newUser) => (dispatch) => {
  dispatch({ type: SIGNUP_USER_START });
  axios
    .post(URL + '/api/register', newUser)
    .then((response) =>
      dispatch({ type: SIGNUP_USER_SUCCESS, payload: response.data })
    )
    .catch((error) => dispatch({ type: SIGNUP_USER_FAILURE, payload: error }));
};

export const login = (user) => (dispatch) => {
  dispatch({ type: LOGIN_USER_START });
  return axios
    .post(URL + '/api/login', user)
    .then((response) => {
      dispatch({ type: LOGIN_USER_SUCCESS, payload: response.data });
    })
    .catch((error) => dispatch({ type: LOGIN_USER_FAILURE, payload: error }));
};
