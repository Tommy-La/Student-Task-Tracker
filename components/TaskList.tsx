// TaskList.tsx
// Call TaskItem to render a TaskList

import React, { useContext } from 'react';
import TaskItem from './TaskItem';
import { TaskContext } from '../context/TaskContext';

const TaskList: React.FC = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <TaskItem task={task} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
