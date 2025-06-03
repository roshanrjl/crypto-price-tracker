import {configureStore} from '@reduxjs/toolkit';
import price from './priceslice';
import mylist from './watchlist';

const store = configureStore({
    reducer: {
      storeprice: price,
      watchlist:mylist,
    },
});

export default store;
