// Import Redux
import { createSlice } from '@reduxjs/toolkit';
// Create Initial State
const initialState = {
  loadingProgress: 100,
};

// Create Slice
const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoadingProgress(state, { payload }) {
      state.loadingProgress = +payload;
    },
  },
});
// Export Actions
export const loadingActions = loadingSlice.actions;
// Export Reducers
export default loadingSlice.reducer;
