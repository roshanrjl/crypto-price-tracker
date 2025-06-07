import { configureStore } from '@reduxjs/toolkit';
import price from './priceslice';
import mylist from './watchlistSlice';
import Authslices from './authslice';
import Currencyslice from './currenyslice'

// Load watchlist from localStorage if available
const loadWatchlist = () => {
  try {
    const serializedWatchlist = localStorage.getItem('watchlist');
    if (serializedWatchlist === null) {
      return undefined;
    }
    return JSON.parse(serializedWatchlist);
  } catch (err) {
    console.warn('Failed to load watchlist from localStorage:', err);
    return undefined;
  }
};

// Save watchlist to localStorage
const saveWatchlist = (watchlistState) => {
  try {
    const serializedWatchlist = JSON.stringify(watchlistState);
    localStorage.setItem('watchlist', serializedWatchlist);
  } catch (err) {
    console.warn('Failed to save watchlist to localStorage:', err);
  }
};

const persistedWatchlist = loadWatchlist();

const store = configureStore({
  reducer: {
    storeprice: price,
    watchlist: mylist,
    authslices: Authslices,
    currency:Currencyslice
  },
  preloadedState: {
    watchlist: persistedWatchlist,
  },
});

store.subscribe(() => {
  const state = store.getState();
  saveWatchlist(state.watchlist);
});

export default store;
