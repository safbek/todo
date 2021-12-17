import React from 'react';

import { useSelector } from 'react-redux';

import Task from './Task';

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
 
  if (tasks.length === 0) {
    return null;
  }

  return (
    <div className="mt-3">
      <ul className="list-group">
        {tasks.map(({ id, text, isEdit }) => (
          <Task id={id} text={text} isEdit={isEdit} key={id} />
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
