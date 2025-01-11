import { combineReducers } from 'redux';
// Import your reducers here
import userReducer from './userReducer';
import businessReducer from './businessReducer';

const rootReducer = combineReducers({
  user: userReducer,
  business: businessReducer,
  // Add other reducers here
});

export default rootReducer;
