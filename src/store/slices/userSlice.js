// Import Redux
import { createSlice } from '@reduxjs/toolkit';
// Create Initial State
const initialState = {
  userName: null,
  userPhoto: null,
  userId: null,
};

// Create Slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.userName = payload.userName;
      state.userPhoto = payload.userPhoto;
      state.userId = payload.userId;
    },
  },
});
// Export Actions
export const userActions = userSlice.actions;
// Export Reducers
export default userSlice.reducer;
