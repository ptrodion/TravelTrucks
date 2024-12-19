import { configureStore } from '@reduxjs/toolkit';
import vehiclesReducer from './vehiclesSlice.jsx';

const store = configureStore({
  reducer: {
    vehicles: vehiclesReducer,
  },
});

export default store;
