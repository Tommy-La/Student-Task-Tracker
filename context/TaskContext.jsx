// TaskContext.tsx

import React, { createContext, useState } from 'react';

// TaskContext.tsx
export const TaskContext = createContext({
  tasks: [],
  addTask: () => {},
  toggleTaskStatus: () => {},
  deleteTask: () => {},
});


const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
  };

  const toggleTaskStatus = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, status: task.status === 'Incomplete' ? 'Completed' : 'Incomplete' }
        : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTaskStatus, deleteTask  }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
