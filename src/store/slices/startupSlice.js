// Import Redux
import { createSlice } from '@reduxjs/toolkit';
// Create Initial State
const initialState = {
  showedSplash: false,
  acceptedRules: false,
};

// Create Slice
const startupSlice = createSlice({
  name: 'startup',
  initialState,
  reducers: {
    setShowedSplash(state, { payload }) {
      state.showedSplash = payload;
    },
    setAcceptedRules(state, { payload }) {
      state.acceptedRules = payload;
    },
  },
});
// Export Actions
export const startupActions = startupSlice.actions;
// Export Reducers
export default startupSlice.reducer;
