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
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-8">
      <label className="block text-sm font-semibold mb-2">
        Task Name:
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className='text-black border border-gray-300 p-2 w-full'
        />
      </label>

      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='text-black border border-gray-300 p-2 w-full'
        />
      </label>

      <button type="submit"         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add Task
        </button>
    </form>
  );
};

export default TaskForm;
