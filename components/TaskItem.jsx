import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContextProvider';

const TaskItem = ({ task }) => {
  const { toggleTaskStatus, deleteTask } = useContext(TaskContext);

  const handleDeleteTask = () => {
    deleteTask(task.id);
  };

  return (
    <div className="border p-4 mb-4 rounded-md">
      <h3 className="text-xl font-semibold mb-2">{task.taskName}</h3>
      <p className="mb-2">{task.description}</p>
      <p className={`text-sm ${task.status === 'completed' ? 'text-green-500' : 'text-gray-500'}`}>Status: {task.status}</p>
      <button 
        onClick={() => toggleTaskStatus(task.id)}
        className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
      >
        Toggle Status
        </button>
      <button
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        onClick={handleDeleteTask}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
