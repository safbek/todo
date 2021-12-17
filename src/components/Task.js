import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { removeTask, editTasks, toggleEditing } from '../slices/tasksSlice.js';

const Task = ({ id, text, isEdit }) => {
  const [newText, setNewText] = useState('');

  const dispatch = useDispatch();

  const handleRemoveTask = (id) => (e) => {
    e.preventDefault();
    dispatch(removeTask({ id }));
  };

  const handleToogle = (id) => (e) => {
    e.preventDefault();
    dispatch(toggleEditing({ id }));
  };

  const handleEdit = (id) => (e) => {
    e.preventDefault();
    dispatch(editTasks({ newText }));
    dispatch(toggleEditing({ id }));
  };

  const handleChange = (e) => setNewText(e.target.value);

    return (
        <li className="list-group-item d-flex align-center">
            { 
              isEdit ?
                <>
                    <input type="text" required value={ newText ? newText : text } onChange={ handleChange } />
                    <button type="button" className="edit mr-2" onClick={ handleEdit(id) }>
                        <span>Save</span>
                    </button>
                </>
                :
                <>
                    <span className="mr-auto">{text}</span>
                    <button type="button" className="edit mr-2" onClick={ handleToogle(id) }>
                        <span>Edit</span>
                    </button>
                </>
            }

            <button type="button" onClick={handleRemoveTask(id)}>
              <span>&times;</span>
            </button>
          </li>
    );
}

export default Task;
