// @ts-check

import React from 'react';
import NewTaskForm from './NewTaskForm.js';
import Tasks from './Tasks.js';

const App = () => (
  <div className="col-5">
    <NewTaskForm />
    <Tasks />
  </div>
);

export default App;
