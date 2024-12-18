import { configureStore } from '@reduxjs/toolkit';
import vehiclesReducer from './vehiclesSlice.jsx';
// import filtersReducer from './filtersSlice';
// import favoritesReducer from './favoritesSlice';

const store = configureStore({
  reducer: {
    vehicles: vehiclesReducer,
    // filters: filtersReducer,
    // favorites: favoritesReducer,
  },
});

export default store;
