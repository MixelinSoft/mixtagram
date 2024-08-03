// Import Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
//Import Slices
import feedSlice from './slices/feedSlice';
import userSlice from './slices/userSlice';
// import mainSlice from './slices/mainSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    // main: mainSlice,
    feed: feedSlice,
  },
});

export default store;
