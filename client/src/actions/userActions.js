import { SET_USER, LOGOUT_USER, UPDATE_PROFILE, SET_LOADING, SET_ERROR } from './types';

export const setUser = (userData) => ({
  type: SET_USER,
  payload: userData
});

export const logoutUser = () => ({
  type: LOGOUT_USER
});

export const updateProfile = (profileData) => ({
  type: UPDATE_PROFILE,
  payload: profileData
});

export const setLoading = () => ({
  type: SET_LOADING
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error
});

// Async action creators
export const loginUser = (credentials) => async (dispatch) => {
  try {
    dispatch(setLoading());
    // Add your API call here
    // const response = await api.login(credentials);
    // dispatch(setUser(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
