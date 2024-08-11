// Import Redux
import { createSlice } from '@reduxjs/toolkit';
// Create Initial State
const initialState = {
  isLoading: false,
  primary: [
    {
      dialogId: 'riowsx',
      sender: 'fil123',
      isMuted: false,
      messages: [
        {
          content: 'Добрый день!',
          timestamp: '2024-08-09T14:00:00Z',
          isIncoming: true,
        },
        {
          content: 'Привет! Как дела?',
          timestamp: '2024-08-09T14:01:00Z',
          isIncoming: false,
        },
        {
          content: 'Норм, а у тебя?',
          timestamp: '2024-08-09T14:00:00Z',
          isIncoming: true,
        },
        {
          content: 'Тоже норм, ну пока!',
          timestamp: '2024-08-09T14:01:00Z',
          isIncoming: false,
        },
        {
          content: 'Пока!',
          timestamp: '2024-08-09T14:00:00Z',
          isIncoming: true,
        },
        {
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nostrum amet error, illo distinctio laboriosam, eum doloremque eligendi similique non quae assumenda explicabo saepe, recusandae earum sed! Reprehenderit, molestias soluta?',
          timestamp: '2024-08-09T14:00:00Z',
          isIncoming: false,
        },
        {
          content: '1',
          timestamp: '2024-08-09T14:00:00Z',
          isIncoming: false,
        },
        {
          content: '2',
          timestamp: '2024-08-09T14:00:00Z',
          isIncoming: false,
        },
      ],
    },
  ],
};

// Create Slice
const directSlice = createSlice({
  name: 'direct',
  initialState,
  reducers: {
    setPosts(state, { payload }) {
      state.posts = payload;
    },
  },
});
// Export Actions
export const directActions = directSlice.actions;
// Export Reducers
export default directSlice.reducer;
