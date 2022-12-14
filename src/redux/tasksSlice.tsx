import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Task {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const initialState: Task[] = [];

let keyid = 0;

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axios.get<Task[]>(
    'https://jsonplaceholder.typicode.com/todos',
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return (await response.data) as Task[];
});

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      const newTask: Task = {
        userId: 0,
        id: keyid++,
        title: action.payload.title,
        completed: false,
      };
      state.push(newTask);
    },
    deleteTask: (state, action: PayloadAction<Task>) => {
      return state.filter((item: Task) => item.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
