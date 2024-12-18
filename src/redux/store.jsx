import { configureStore } from '@reduxjs/toolkit';
import vehiclesReducer from './vehiclesSlice.jsx';
import filterReducer from './filtersSlice.jsx';
// import favoritesReducer from './favoritesSlice';

const store = configureStore({
  reducer: {
    vehicles: vehiclesReducer,
    filters: filterReducer,
    // favorites: favoritesReducer,
  },
});

export default store;
