import { createSlice } from '@reduxjs/toolkit';

const businessSlice = createSlice({
  name: 'business',
  initialState: {
    listings: [],
    selectedBusiness: null,
  },
  reducers: {
    setListings: (state, action) => {
      state.listings = action.payload;
    },
    addListing: (state, action) => {
      state.listings.push(action.payload);
    },
    setSelectedBusiness: (state, action) => {
      state.selectedBusiness = action.payload;
    },
  },
});

export const { setListings, addListing, setSelectedBusiness } = businessSlice.actions;
export default businessSlice.reducer;
