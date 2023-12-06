"use client"
import React from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import TaskContextProvider from '@/context/TaskContext';

const Page: React.FC = () => {
  return (
    <TaskContextProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Your Task Tracker App</h1>
        <div >
        <TaskForm />
        <TaskList />
        </div>
      </div>
    </TaskContextProvider>
  );
};

export default Page;
