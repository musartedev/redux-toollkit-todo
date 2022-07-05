import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: uuidv4(),
        text: action.payload.text,
        done: false,
      };
      state.push(newTask);
    },
    toggleTask: (state, action) => {
      const taskIndex = state.findIndex(
        (task) => task.id === action.payload.id
      );
      if (taskIndex >= 0) {
        state[taskIndex].done = !state[taskIndex].done;
      }
    },
  },
});

export const { addTask, toggleTask } = tasksSlice.actions;

export default tasksSlice.reducer;
