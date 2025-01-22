import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import userReducer from '../slices/userSlice';
import bookingReducer from '../slices/bookingSlice';
import uiReducer from '../slices/uiSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    booking: bookingReducer,
    ui: uiReducer
  }
});

// Remove TypeScript exports
export const getStoreState = store.getState;
export const getStoreDispatch = store.dispatch;
