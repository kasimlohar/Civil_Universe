import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../utils/axiosInstance';
import { handleApiError } from '../utils/errorHandler';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/auth/login', credentials);
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

export const register = createAsyncThunk('auth/register', async (userData) => {
  const response = await axiosInstance.post('/auth/register', userData);
  return response.data;
});

export const checkAuth = createAsyncThunk(
  'auth/check',
  async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No token found');
      
      const response = await axiosInstance.get('/auth/check');
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
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
    logout: (state) => {
      localStorage.removeItem('token');
      state.user = null;
      state.isAuthenticated = false;
    }
  },
  extraReducers: (builder) => {
    // Builder cases
    // ...existing code...
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
