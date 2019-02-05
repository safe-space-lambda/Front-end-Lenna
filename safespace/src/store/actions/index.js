import axios from 'axios';

export const FETCH_USER_START = 'FETCH_USER_START';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const ADD_USER_START = 'ADD_USER_START';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE';

const URL = 'https://lambda-safe-space.herokuapp.com'

export const getUser = () => dispatch => {
  dispatch({ type: FETCH_USER_START });
  axios
    .get(URL)
    .then(response =>
      dispatch({ type: FETCH_USER_SUCCESS, payload: response.data })
    )
    .catch(error => dispatch({ type: FETCH_USER_FAILURE, payload: error }));
  
};

export const addUser = newUser => dispatch => {
  dispatch({ type: ADD_USER_START });
  return axios
    .post(URL, newUser)
    .then(response => {
      dispatch({ type: ADD_USER_SUCCESS, payload: response.data });
    })
    .catch(error => dispatch({ type: ADD_USER_FAILURE, payload: error }));
};