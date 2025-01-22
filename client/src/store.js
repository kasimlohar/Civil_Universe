import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import businessReducer from './slices/businessSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    business: businessReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['payload.timestamp'],
        ignoredPaths: ['booking.selectedDate']
      }
    })
});

// Remove default export, use named export only
export const getStoreState = store.getState;
export const getStoreDispatch = store.dispatch;
