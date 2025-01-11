import {
  SET_BUSINESSES,
  ADD_BUSINESS,
  UPDATE_BUSINESS,
  DELETE_BUSINESS,
  SET_LOADING,
  SET_ERROR
} from './types';

export const setBusinesses = (businesses) => ({
  type: SET_BUSINESSES,
  payload: businesses
});

export const addBusiness = (business) => ({
  type: ADD_BUSINESS,
  payload: business
});

export const updateBusiness = (business) => ({
  type: UPDATE_BUSINESS,
  payload: business
});

export const deleteBusiness = (businessId) => ({
  type: DELETE_BUSINESS,
  payload: businessId
});

export const setLoading = () => ({
  type: SET_LOADING
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error
});

// Async action creators
export const fetchBusinesses = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    // Add your API call here
    // const response = await api.getBusinesses();
    // dispatch(setBusinesses(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
