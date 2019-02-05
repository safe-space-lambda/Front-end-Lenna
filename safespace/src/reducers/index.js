import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  SIGNUP_USER_START,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
} from '../actions';

const initialState = {
  username: '',
  serverToken: '',
  isLoggedIn: false,
  isLoading: false,
  error: '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        serverToken: action.payload,
        isLoading: false,
        isLoggedIn: true,
        error: '',
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.payload,
      };
    case SIGNUP_USER_START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: '',
      };
    case SIGNUP_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default rootReducer;
