import {configureStore} from '@reduxjs/toolkit';
import price from './priceslice';
import mylist from './watchlist';
import Authslices from './authslice'

const store = configureStore({
    reducer: {
      storeprice: price,
      watchlist:mylist,
      authslices:Authslices,
    },
});

export default store;
