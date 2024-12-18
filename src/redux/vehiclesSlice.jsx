import { createSlice } from '@reduxjs/toolkit';
import { fetchVehicles, fetchFilteredVehicles } from './operations';

const INITIAL_STATE = {
  listOfVehicles: [],
  isLoading: false,
  error: null,
};

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState: INITIAL_STATE,
  reducers: {
    clearVehicles(state) {
      state.listOfVehicles = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.listOfVehicles = action.payload;
      })
      .addCase(fetchVehicles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchFilteredVehicles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFilteredVehicles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.listOfVehicles = action.payload;
      })
      .addCase(fetchFilteredVehicles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearVehicles } = vehiclesSlice.actions;
export default vehiclesSlice.reducer;
