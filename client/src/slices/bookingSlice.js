import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../utils/axiosInstance';

export const createBooking = createAsyncThunk(
  'booking/create',
  async (bookingData) => {
    const response = await axiosInstance.post('/bookings', bookingData);
    return response.data;
  }
);

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    bookings: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    // ...existing code...
  }
});

export default bookingSlice.reducer;
