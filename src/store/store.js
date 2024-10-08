// Import Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
//Import Slices
import feedSlice from './slices/feedSlice';
import userSlice from './slices/userSlice';
import usersSlice from './slices/usersSlice';
import directSlice from './slices/directSlice';
import loadingSlice from './slices/loadingSlice';
import startupSlice from './slices/startupSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    users: usersSlice,
    feed: feedSlice,
    direct: directSlice,
    loading: loadingSlice,
    startup: startupSlice,
  },
});

export default store;
