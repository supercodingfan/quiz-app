import { configureStore } from '@reduxjs/toolkit';
import questionReducer from './modules/questions';

export const store = configureStore({
  reducer: {
    questions: questionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
