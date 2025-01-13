import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../utils/axiosInstance';

export const fetchUserProfile = createAsyncThunk(
  'user/fetchProfile',
  async (userId) => {
    const response = await axiosInstance.get(`/users/${userId}`);
    return response.data;
  }
);

export const updateUserProfile = createAsyncThunk(
  'user/updateProfile',
  async (userData) => {
    const response = await axiosInstance.put(`/users/${userData.id}`, userData);
    return response.data;
  }
);

// Slice configuration
const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: null,
    loading: false,
    error: null
  },
  reducers: {
    clearUserProfile: (state) => {
      state.profile = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
        state.error = null;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { clearUserProfile } = userSlice.actions;
export default userSlice.reducer;
