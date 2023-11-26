// TaskItem.tsx
import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

interface TaskItemProps {
  task: { id: string; name: string; completed: boolean };
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { updateTask, deleteTask } = useContext(TaskContext);

  const handleToggleCompletion = () => {
    updateTask(task.id, { ...task, completed: !task.completed });
  };

  const handleDeleteTask = () => {
    deleteTask(task.id);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggleCompletion}
      />
      <span>{task.name}</span>
      <button onClick={handleDeleteTask}>Delete</button>
    </li>
  );
};

export default TaskItem;
