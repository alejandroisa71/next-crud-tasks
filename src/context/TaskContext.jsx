'use client';
const { createContext, useContext, useState } = require('react');
import { v4 as uuid } from 'uuid';

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTask must be used whitin a provider');

  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'mi first task',
      description: 'some one description',
    },
    {
      id: 2,
      title: 'mi second task',
      description: 'some second description',
    },
    {
      id: 3,
      title: 'mi third task',
      description: 'some third description',
    },
  ]);

  const addTask = (title, description) =>
    setTasks([
      ...tasks,
      {
        title,
        description,
        id: uuid,
      },
    ]);

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};
