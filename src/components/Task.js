import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { removeTask, editTasks } from '../slices/tasksSlice.js';

const Task = ({ id, text }) => {
  const [isEdit, setEdit] = useState(false);

  const dispatch = useDispatch();

  const [newText, setNewText] = useState(text);

  const handleChange = (e) => setNewText(e.target.value);

  const handleRemoveTask = (id) => (e) => {
    e.preventDefault();
    dispatch(removeTask({ id }));
  };

  const handleEdit = (id) => (e) => {
    e.preventDefault();
    dispatch(editTasks({ id, newText }));
    setEdit(!isEdit);
  };

    return (
        <li className="list-group-item d-flex align-center">
            { 
              isEdit ?
                <input type="text" required value={newText} onChange={ handleChange } />
                :
                <span className="mr-auto">{ text }</span>
            }

            <button type="button" className="edit mr-2" onClick={ handleEdit(id) }>
              <span>{ isEdit ? 'Save' : 'Edit' }</span>
             </button>

            <button type="button" onClick={handleRemoveTask(id)}>
              <span>&times;</span>
            </button>
          </li>
    );
}

export default Task;
