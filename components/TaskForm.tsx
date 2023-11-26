import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskForm: React.FC = () => {
  const [taskName, setTaskName] = useState<string>('');
  const { addTask } = useContext(TaskContext);

  const handleAddTask = () => {
    // Check if taskName is not empty
    if (taskName.trim()) {
      addTask({ name: taskName, completed: false });
      setTaskName('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task name"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;
