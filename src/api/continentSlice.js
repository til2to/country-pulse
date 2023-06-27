import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { continentLoader } from './countries';

const initialState = {
  countries: [],
  loading: false,
  error: null,
};

export const fetchCountries = createAsyncThunk(
  'continent/fetchCountries',
  async (payload) => {
    const data = await continentLoader(payload);
    return data;
  },
);

const continentSlice = createSlice({
  name: 'continent',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCountries.pending]: (state) => {
      state.loading = true;
    },
    [fetchCountries.fulfilled]: (state, action) => {
      state.loading = false;
      state.countries = action.payload;
    },
    [fetchCountries.rejected]: (state, action) => {
      state.loading = false;
      state.countries = [];
      state.error = action.error.message;
    },
  },
});

export default continentSlice.reducer;
