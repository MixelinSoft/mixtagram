// Import Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
//Import Slices
import feedSlice from './slices/feedSlice';
import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    feed: feedSlice,
  },
});

export default store;
