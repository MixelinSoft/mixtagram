// Import Redux
import { createSlice } from '@reduxjs/toolkit';
// Create Initial State
const initialState = {
  showedSplash: false,
};

// Create Slice
const startupSlice = createSlice({
  name: 'startup',
  initialState,
  reducers: {
    setShowedSplash(state, { payload }) {
      state.showedSplash = payload;
    },
  },
});
// Export Actions
export const startupActions = startupSlice.actions;
// Export Reducers
export default startupSlice.reducer;
