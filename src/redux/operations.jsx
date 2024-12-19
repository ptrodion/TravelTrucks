import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const instance = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/',
});

export const fetchVehicles = createAsyncThunk(
  'vehicles',
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await instance.get('campers', {
        params: { page, limit },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        return thunkAPI.rejectWithValue({
          status: error.response.status,
          message: error.response.statusText || 'Unknown server error',
        });
      } else {
        return thunkAPI.rejectWithValue({
          status: 0,
          message: 'Network error. Please try again.',
        });
      }
    }
  }
);

export const fetchFilteredVehicles = createAsyncThunk(
  'vehicles/filter',
  async ({ filters, page, limit }, thunkAPI) => {
    try {
      const response = await instance.get('campers', {
        params: { ...filters, page, limit },
      });
      // const response = await instance.get('campers?AC=true&bathroom=false&engine=petrol');

      return response.data;
    } catch (error) {
      if (error.response) {
        return thunkAPI.rejectWithValue({
          status: error.response.status,
          message: error.response.statusText || 'Unknown server error',
        });
      } else {
        return thunkAPI.rejectWithValue({
          status: 0,
          message: 'Network error. Please try again.',
        });
      }
    }
  }
);
