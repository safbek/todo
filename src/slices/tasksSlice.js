/* eslint-disable no-param-reassign */

// BEGIN (write your solution here)
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const tasksReducer = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, { payload: { task } }) => {
      state.tasks = [task, ...state.tasks];
    },

    removeTask: (state, { payload: { id } }) => {
      state.tasks = state.tasks.filter((t) => t.id !== id);
    },

    editTasks: (state, { payload: { id, newText } }) => {
      state.tasks = state.tasks.map((t) => {
        if (t.id === id && newText !== '') {
          return { ...t, text: newText };
        }
        return t;
      });
    },
  },
});

export const { addTask, removeTask, editTasks } = tasksReducer.actions;

export default tasksReducer.reducer;
// END
