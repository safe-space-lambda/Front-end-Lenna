import axios from 'axios';

export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const SIGNUP_USER_START = 'SIGNUP_USER_START';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';

export const CREATE_MESSAGE_START = 'CREATE_MESSAGE_START';
export const CREATE_MESSAGE_SUCCESS = 'CREATE_MESSAGE_SUCCESS';
export const CREATE_MESSAGE_FAILURE = 'CREATE_MESSAGE_FAILURE';

export const DELETE_MESSAGE_START = 'DELETE_MESSAGE_START';
export const DELETE_MESSAGE_SUCCESS = 'DELETE_MESSAGE_SUCCESS';
export const DELETE_MESSAGE_FAILURE = 'DELETE_MESSAGE_FAILURE';

export const UPDATE_MESSAGE_START = 'UPDATE_MESSAGE_START';
export const UPDATE_MESSAGE_SUCCESS = 'UPDATE_MESSAGE_SUCCESS';
export const UPDATE_MESSAGE_FAILURE = 'UPDATE_MESSAGE_FAILURE';

export const RETRIEVE_MESSAGE_START = 'RETRIEVE_MESSAGE_START';
export const RETRIEVE_MESSAGE_SUCCESS = 'RETRIEVE_MESSAGE_SUCCESS';
export const RETRIEVE_MESSAGE_FAILURE = 'RETRIEVE_MESSAGE_FAILURE';

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

export const fetchMessages = (userId, token) => (dispatch) => {
  dispatch({ type: RETRIEVE_MESSAGE_START });
  let headers = {
    Authorization: token,
  };
  axios
    .get(`${URL}/api/users/${userId}/messages`, {
      headers: headers,
    })
    .then((response) => {
      dispatch({ type: RETRIEVE_MESSAGE_SUCCESS, payload: response.data });
    })
    .catch((error) =>
      dispatch({ type: RETRIEVE_MESSAGE_FAILURE, payload: error })
    );
};

export const createMessage = (newMessage, userId, token) => (dispatch) => {
  dispatch({ type: CREATE_MESSAGE_START });
  let headers = {
    Authorization: token,
  };
  axios
    .post(`${URL}/api/users/${userId}/messages`, newMessage, {
      headers: headers,
    })
    .then((response) => {
      dispatch({ type: CREATE_MESSAGE_SUCCESS, payload: response.data });
      
    })
    .then(()=>fetchMessages(userId, token)(dispatch))
    .catch((error) =>
      dispatch({ type: CREATE_MESSAGE_FAILURE, payload: error })
    );
};

export const deleteMessage = (messageId, userId, token) => (dispatch) => {
  dispatch({ type: DELETE_MESSAGE_START });
  let headers = {
    Authorization: token,
  };
  axios
    .delete(`${URL}/api/messages/${messageId}`, {
      headers: headers,
    })
    .then((response) => {
      dispatch({ type: DELETE_MESSAGE_SUCCESS, payload: response.data });
    })
    .then(()=>fetchMessages(userId, token)(dispatch))
    .catch((error) =>
      dispatch({ type: DELETE_MESSAGE_FAILURE, payload: error })
    );
};

export const updateMessage = (messageId, updatedMessage, userId, token) => (
  dispatch
) => {
  dispatch({ type: UPDATE_MESSAGE_START });
  let headers = {
    Authorization: token,
  };
  axios
    .put(`${URL}/api/messages/${messageId}`, updatedMessage, {
      headers: headers,
    })
    .then((response) => {
      dispatch({ type: UPDATE_MESSAGE_SUCCESS, payload: response.data });
    })
    .then(()=>fetchMessages(userId, token)(dispatch))

    .catch((error) =>
      dispatch({ type: UPDATE_MESSAGE_FAILURE, payload: error })
    );
};
