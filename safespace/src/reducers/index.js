import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  SIGNUP_USER_START,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
  RETRIEVE_MESSAGE_START,
  RETRIEVE_MESSAGE_SUCCESS,
  RETRIEVE_MESSAGE_FAILURE,
  CREATE_MESSAGE_START,
  CREATE_MESSAGE_SUCCESS,
  CREATE_MESSAGE_FAILURE,
  DELETE_MESSAGE_START,
  DELETE_MESSAGE_SUCCESS,
  DELETE_MESSAGE_FAILURE,
  UPDATE_MESSAGE_START,
  UPDATE_MESSAGE_SUCCESS,
  UPDATE_MESSAGE_FAILURE,
} from '../actions';

const initialState = {
  name: '',
  userId: '',
  serverToken: '',
  isLoggedIn: false,
  isLoading: false,
  messages: [],
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
        name: action.payload.name,
        userId: action.payload.id,
        serverToken: action.payload.token,
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
    case RETRIEVE_MESSAGE_START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case RETRIEVE_MESSAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        messages: action.payload,
        error: '',
      };
    case RETRIEVE_MESSAGE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case CREATE_MESSAGE_START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case CREATE_MESSAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
      };
    case CREATE_MESSAGE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case DELETE_MESSAGE_START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case DELETE_MESSAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
      };
    case DELETE_MESSAGE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case UPDATE_MESSAGE_START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case UPDATE_MESSAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
      };
    case UPDATE_MESSAGE_FAILURE:
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
