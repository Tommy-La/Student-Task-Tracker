import React, { createContext, useState, useEffect } from 'react';
import { collection, addDoc, doc, query, getDocs, updateDoc, deleteDoc } from "firebase/firestore"; 
import db from '../firebase.js';

export const TaskContext = createContext({
  tasks: [],
  addTask: () => {},
  toggleTaskStatus: () => {},
  deleteTask: () => {},
});


const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const q = query(collection(db, "tasks"));
        const tasksSnapshot = await getDocs(q);
        const tasksData = tasksSnapshot.docs.map((doc)=>({
          id: doc.id,
          ...doc.data(),
        }))
        setTasks(tasksData);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const addTask = async (task) => {
    try {
      // // Add the task to the "tasks" collection
      // const addedTask = await db.collection('tasks').add(task);
      
      const addedTask = await addDoc(collection(db, "tasks"), task)

      // Update the state with the new task (including the Firestore-generated ID)
      setTasks([...tasks, { id: addedTask.id, ...task }]);
    } catch (error) {
      console.error('Could not add task:', error);
    }
  };

  const toggleTaskStatus = async (taskId) => {
    try {
      const tasksRef = doc(db, "tasks", taskId);
      const taskToUpdate = tasks.find((task) => task.id === taskId);

      if (taskToUpdate) {
        // Toggle the status locally first
        const updatedTasks = tasks.map((task) =>
          task.id === taskId
            ? { ...task, status: task.status === 'Incomplete' ? 'Completed' : 'Incomplete' }
            : task
        );

        setTasks(updatedTasks);

        // Then, update the status in Firestore
        //await tasksRef.doc(taskId).update({ status: taskToUpdate.status });
        await updateDoc(tasksRef, {
          status: taskToUpdate.status
        })
      }
    } catch (error) {
      console.error('Error toggling task status:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const tasksRef = doc(db, "tasks", taskId);

      // Delete the task locally first
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);

      // Then, delete the task from Firestore
      //await tasksRef.doc(taskId).delete();
      await deleteDoc(tasksRef);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTaskStatus, deleteTask  }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
