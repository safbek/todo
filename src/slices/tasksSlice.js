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

    toggleEditing: (state, { payload: { id } }) => {
      state.tasks = state.tasks.map((t) => {
        if (t.id === id) {
          return { ...t, isEdit: !t.isEdit }
        }
        return { ...t, isEdit: false }
      });
    },

    editTasks: (state, { payload: { newText } }) => {
      console.log(newText);
      state.tasks = state.tasks.map((t) => {
        if (t.isEdit && newText !== '') {
          return { ...t, text: newText };
        }
        return t;
      });
    },
  },
});

export const { addTask, removeTask, toggleEditing, editTasks } = tasksReducer.actions;

export default tasksReducer.reducer;
// END
