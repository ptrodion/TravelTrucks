import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  searchQuery: '',
  priceRange: [0, 100000],
  categories: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: INITIAL_STATE,
  reducers: {
    setFilters(state, action) {
      return { ...state, ...action.payload };
    },
    resetFilters(state) {
      state.searchQuery = '';
      state.priceRange = [0, 100000];
      state.categories = [];
    },
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
