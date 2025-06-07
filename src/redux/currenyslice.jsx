import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchcurrency = createAsyncThunk(
  "currency/fetchcurrency",
  async (_, thunkAPI) => {
    try {
      const response = await fetch("https://openexchangerates.org/api/currencies.json");

      if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();

      

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const Currencyslice = createSlice({
  name: "currency",
  initialState: {
    symbols: {},
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchcurrency.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchcurrency.fulfilled, (state, action) => {
        state.loading = false;
        state.symbols = action.payload;
        state.error = null;
      })
      .addCase(fetchcurrency.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.error("Failed to fetch currencies:", action.payload);
      });
  },
});

export default Currencyslice.reducer;
