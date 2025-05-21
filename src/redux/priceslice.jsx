import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// immer package {...0 , name="roshan"}


export const fetchPrice = createAsyncThunk(
  "price/fetchprice",
  async (vs_currencies, thunkAPI) => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vs_currencies}`
      );

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

const priceSlice = createSlice({
  name: "price",
  initialState: {
    price: [],
    loading: false,
    error: null,
    currency: "usd",
  },
  reducers: {
    setcurrency: (state, action) => {
      state.currency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPrice.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPrice.fulfilled, (state, action) => {
        state.loading = false;
        state.price = action.payload;
      })
      .addCase(fetchPrice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setcurrency } = priceSlice.actions;
export default priceSlice.reducer;
