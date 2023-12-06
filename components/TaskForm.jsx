import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContextProvider';

const TaskForm = (props) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  
  const { addTask } = useContext(TaskContext);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation (add more as needed)
    if (taskName.trim() === '') {
      alert('Task name cannot be empty!');
      return;
    }

    // Create a new task object
    const newTask = {
      taskName,  // Update property name to match what addTask expects
      description,
      status: 'Incomplete',  // Assuming you have a status property
    };

    // Add the task using the context function
    addTask(newTask);

    // Clear form inputs after submission
    setTaskName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task Name:
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className='text-black'
        />
      </label>

      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
