import { SET_USER, LOGOUT_USER, UPDATE_PROFILE } from '../actions/types';

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
        error: null
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        user: { ...state.user, ...action.payload },
        loading: false,
        error: null
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default userReducer;
