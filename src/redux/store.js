import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './book/bookSlice';
import catagorySlice from './catagory/catagorySlice';

const store = configureStore({
  reducer: {
    books: bookSlice,
    catagory: catagorySlice,
  },
});

export default store;
