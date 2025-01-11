import { createSlice } from '@reduxjs/toolkit';

const businessSlice = createSlice({
  name: 'business',
  initialState: {
    listings: [],
  },
  reducers: {
    setListings: (state, action) => {
      state.listings = action.payload;
    },
    addListing: (state, action) => {
      state.listings.push(action.payload);
    },
  },
});

export const { setListings, addListing } = businessSlice.actions;
export default businessSlice.reducer;
