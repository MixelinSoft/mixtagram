// Import Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
//Import Slices
import feedSlice from './slices/feedSlice';
// import mainSlice from './slices/mainSlice';

const store = configureStore({
  reducer: {
    // main: mainSlice,
    feed: feedSlice,
  },
});

export default store;
