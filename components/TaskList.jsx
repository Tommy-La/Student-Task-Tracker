
import React, { useContext } from 'react';
import TaskItem from './TaskItem';
import { TaskContext } from '../context/TaskContextProvider';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div >
      <h2 className="max-w-2xl mx-auto mt-8">Task List</h2>
      {tasks.length === 0 ? (
        <p lassName="max-w-2xl mx-auto mt-8"
        >
          No tasks available.</p>
      ) : (
        <ul className="max-w-2xl mx-auto mt-8">
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
