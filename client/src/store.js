import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import businessReducer from './slices/businessSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    business: businessReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
