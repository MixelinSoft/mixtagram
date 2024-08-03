// Import Redux
import { createSlice } from '@reduxjs/toolkit';
// Create Initial State
const initialState = {
  users: [],
};

// Create Slice
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, { payload }) {
      state.users = payload;
    },
  },
});
// Export Actions
export const usersActions = usersSlice.actions;
// Export Reducers
export default usersSlice.reducer;
