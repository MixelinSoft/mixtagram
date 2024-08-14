// Import Redux
import { createSlice } from '@reduxjs/toolkit';
// Create Initial State
const initialState = {
  isLoading: false,
  primary: [],
};

// Create Slice
const directSlice = createSlice({
  name: 'direct',
  initialState,
  reducers: {
    setPrimary(state, { payload }) {
      state.primary = payload;
    },
    sendMessage(state, { payload }) {
      const currentDialog = state.primary.find((dialog) => {
        if (dialog.dialogId === payload.dialogId) {
          return dialog;
        }
      });
      currentDialog.messages.push({
        messageId: Math.floor(100000 + Math.random() * 900000).toString(),
        content: payload.content,
        timestamp: '2024',
        isIncoming: payload.isIncoming,
      });
    },
  },
});
// Export Actions
export const directActions = directSlice.actions;
// Export Reducers
export default directSlice.reducer;
