import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  watchlist: [],
  loading: false,
  error: null,
};

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addToWatchlist(state, action) {
      const existingCoin = state.watchlist.find((coin) => coin.id === action.payload.id);
      if (!existingCoin) {
        state.watchlist.push(action.payload);
      }
    },

    removeFromWatchlist(state, action) {
      state.watchlist = state.watchlist.filter((coin) => coin.id !== action.payload.id);
    },
  },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
