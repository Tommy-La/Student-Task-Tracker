// TaskForm.tsx
// A form to add new task to the task list


import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

interface TaskFormProps {
  // You can define any props specific to your needs here
}

const TaskForm: React.FC<TaskFormProps> = (props) => {
  const [taskName, setTaskName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const id = 0; // Temporary ID, will be generate by Database
  // Accessing the TaskContext
  const { addTask } = useContext(TaskContext);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation (add more as needed)
    if (taskName.trim() === '') {
      alert('Task name cannot be empty!');
      return;
    }

    // Create a new task object
    const newTask = {
      id,
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
