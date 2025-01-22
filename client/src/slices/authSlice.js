import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../utils/axiosInstance';

// Add login action
export const login = createAsyncThunk(
  'auth/login',
  async (credentials) => {
    const response = await axiosInstance.post('/auth/login', credentials);
    return response.data;
  }
);

// Add register action
export const register = createAsyncThunk(
  'auth/register',
  async (userData) => {
    const response = await axiosInstance.post('/auth/register', userData);
    return response.data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null
  },
  reducers: {
    clearUser: state => {
      state.user = null;
      state.isAuthenticated = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    }
  },
  extraReducers: (builder) => {
    // ...existing code...
  }
});

export const { clearUser, setUser } = authSlice.actions;
export default authSlice.reducer;
