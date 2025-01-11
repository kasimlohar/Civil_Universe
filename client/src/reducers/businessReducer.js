import { 
  SET_BUSINESSES, 
  ADD_BUSINESS, 
  UPDATE_BUSINESS, 
  DELETE_BUSINESS,
  SET_LOADING,
  SET_ERROR 
} from '../actions/types';

const initialState = {
  businesses: [],
  loading: false,
  error: null,
  filteredBusinesses: [],
  selectedCategory: 'all'
};

const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BUSINESSES:
      return {
        ...state,
        businesses: action.payload,
        filteredBusinesses: action.payload,
        loading: false,
        error: null
      };
    case ADD_BUSINESS:
      return {
        ...state,
        businesses: [...state.businesses, action.payload],
        filteredBusinesses: [...state.businesses, action.payload],
        loading: false,
        error: null
      };
    case UPDATE_BUSINESS:
      return {
        ...state,
        businesses: state.businesses.map(business =>
          business.id === action.payload.id ? action.payload : business
        ),
        filteredBusinesses: state.filteredBusinesses.map(business =>
          business.id === action.payload.id ? action.payload : business
        ),
        loading: false,
        error: null
      };
    case DELETE_BUSINESS:
      return {
        ...state,
        businesses: state.businesses.filter(business => business.id !== action.payload),
        filteredBusinesses: state.filteredBusinesses.filter(business => business.id !== action.payload),
        loading: false,
        error: null
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default businessReducer;
