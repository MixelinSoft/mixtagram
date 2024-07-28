// Import Redux
import { createSlice } from '@reduxjs/toolkit';
// Create Initial State
const initialState = {
  isLoading: false,
  posts: null,
};

// Create Slice
const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    setPosts(state, { payload }) {
      state.posts = payload;
    },
  },
});
// Export Actions
export const feedActions = feedSlice.actions;
// Export Reducers
export default feedSlice.reducer;
