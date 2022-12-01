import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Task {
  id: number;
  name: string;
}

const initialState: Task[] = [];

let keyid = 0;
export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      const newTask: Task = {
        id: keyid++,
        name: action.payload.name,
      };
      state.push(newTask);
    },
    deleteTask: (state, action: PayloadAction<Task>) => {
      return state.filter((item: Task) => item.id !== action.payload.id);
    },
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
