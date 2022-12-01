import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './tasksSlice';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
