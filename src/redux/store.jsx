import {configureStore} from '@reduxjs/toolkit';
import price from './priceslice';

const store = configureStore({
    reducer: {
      storeprice: price,
    },
});

export default store;
