import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addToFavorites(state, action) {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    removeFromFavorites(state, action) {
      return state.filter((id) => id !== action.payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
