import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import userReducer from '../slices/userSlice';
import businessReducer from '../slices/businessSlice';
import bookingReducer from '../slices/bookingSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    business: businessReducer,
    booking: bookingReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['payload.timestamp'],
        ignoredPaths: ['booking.selectedDate']
      }
    })
});

// Remove TypeScript types and export store state and dispatch as regular JS
export const getStoreState = store.getState;
export const getStoreDispatch = store.dispatch;
