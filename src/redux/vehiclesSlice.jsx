import { createSlice } from '@reduxjs/toolkit';
import { fetchVehicles, fetchFilteredVehicles } from './operations';

const INITIAL_STATE = {
  listOfVehicles: [],
  isLoading: false,
  error: null,
  filters: {},
  page: 1,
  limit: 5,
  total: 0,
};

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState: INITIAL_STATE,
  reducers: {
    setFilters(state, action) {
      state.filters = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
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
        if (action.meta.arg.page === 1) {
          state.listOfVehicles = action.payload.items;
        } else {
          state.listOfVehicles = [
            ...state.listOfVehicles,
            ...action.payload.items,
          ];
        }
        state.total = action.payload;
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
        state.listOfVehicles = action.payload.items;
        state.total = action.payload;
      })
      .addCase(fetchFilteredVehicles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setFilters, setPage, clearVehicles } = vehiclesSlice.actions;
export default vehiclesSlice.reducer;
