// TaskContext.tsx

import React, { createContext, useState } from 'react';

interface Task {
  id: number;
  taskName: string;
  description: string;
  status: string;
}

interface TaskContextProps {
  tasks: Task[];
  addTask: (task: Task) => void;
  toggleTaskStatus: (taskId: number) => void;
  deleteTask: (taskId: number) => void;
  children?: React.ReactNode; 
}

// TaskContext.tsx
export const TaskContext = createContext<TaskContextProps>({
  tasks: [],
  addTask: () => {},
  toggleTaskStatus: () => {},
  deleteTask: () => {},
});


const TaskContextProvider: React.FC<TaskContextProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
  };

  const toggleTaskStatus = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, status: task.status === 'Incomplete' ? 'Completed' : 'Incomplete' }
        : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTaskStatus, deleteTask  }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
