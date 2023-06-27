import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { countryLoader } from './countries';

const initialState = {
  country: [],
  loading: false,
  error: null,
};

export const fetchCountry = createAsyncThunk(
  'country/fetchCountry',
  async (payload) => {
    const data = await countryLoader(payload);
    return data;
  },
);

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCountry.pending]: (state) => {
      state.loading = true;
    },
    [fetchCountry.fulfilled]: (state, action) => {
      state.loading = false;
      state.country = action.payload;
    },
    [fetchCountry.rejected]: (state, action) => {
      state.loading = false;
      state.country = [];
      state.error = action.error.message;
    },
  },
});

export default countrySlice.reducer;
