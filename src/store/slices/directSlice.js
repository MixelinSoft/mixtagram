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
          messageId: '938523',
          content: 'Привет, Филя! Как дела?',
          timestamp: '2024-08-09T14:00:00Z',
          isIncoming: false,
        },
        {
          messageId: '938524',
          content: 'Привет, Марс! Всё супер! А у тебя?',
          timestamp: '2024-08-09T14:01:00Z',
          isIncoming: true,
        },
        {
          messageId: '938525',
          content: 'Всё отлично! Как твой красный мячик?',
          timestamp: '2024-08-09T14:02:00Z',
          isIncoming: false,
        },
        {
          messageId: '938526',
          content:
            'О, ты не представляешь, какой он классный! Я весь день с ним играю! ⚽',
          timestamp: '2024-08-09T14:03:00Z',
          isIncoming: true,
        },
        {
          messageId: '938527',
          content: 'Никогда не видел такого красивого мячика!',
          timestamp: '2024-08-09T14:03:30Z',
          isIncoming: true,
        },
        {
          messageId: '938528',
          content: 'Красный, как огонь! 🔥',
          timestamp: '2024-08-09T14:04:00Z',
          isIncoming: true,
        },
        {
          messageId: '938529',
          content: 'Здорово! А я сегодня поймал большую мышь!',
          timestamp: '2024-08-09T14:05:00Z',
          isIncoming: false,
        },
        {
          messageId: '938510',
          content: 'Серьёзно?! Вот это удача! 🐭',
          timestamp: '2024-08-09T14:06:00Z',
          isIncoming: true,
        },
        {
          messageId: '938511',
          content: 'Да! Пришлось потрудиться, но я справился!',
          timestamp: '2024-08-09T14:07:00Z',
          isIncoming: false,
        },
        {
          messageId: '938512',
          content: 'Ты просто герой, Марс!',
          timestamp: '2024-08-09T14:08:00Z',
          isIncoming: true,
        },
        {
          messageId: '938513',
          content: 'Спасибо, Филя! Может, как-нибудь сыграем вместе?',
          timestamp: '2024-08-09T14:09:00Z',
          isIncoming: false,
        },
        {
          messageId: '938514',
          content: 'Конечно! Я покажу тебе мой супер-красный мячик!',
          timestamp: '2024-08-09T14:10:00Z',
          isIncoming: true,
        },
        {
          messageId: '938515',
          content: 'С удовольствием! Думаю, мы отлично проведём время!',
          timestamp: '2024-08-09T14:11:00Z',
          isIncoming: false,
        },
        {
          messageId: '938506',
          content: 'Обязательно! Ладно, побежал играть дальше!',
          timestamp: '2024-08-09T14:12:00Z',
          isIncoming: true,
        },
        {
          messageId: '938516',
          content: 'До встречи, Филя! Жду с нетерпением нашей игры!',
          timestamp: '2024-08-09T14:13:00Z',
          isIncoming: false,
        },
        {
          messageId: '938517',
          content: 'До встречи, Марс!',
          timestamp: '2024-08-09T14:14:00Z',
          isIncoming: true,
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
    setPosts(state, { payload }) {},
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
