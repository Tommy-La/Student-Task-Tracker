// TaskItem.tsx
import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

interface TaskItemProps {
  task: {
    id: number;
    taskName: string;
    description: string;
    status: string;
  };
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { toggleTaskStatus, deleteTask } = useContext(TaskContext);

  const handleDeleteTask = () => {
    deleteTask(task.id);
  };

  return (
    <div>
      <h3>{task.taskName}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <button onClick={() => toggleTaskStatus(task.id)}>Toggle Status</button>
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
