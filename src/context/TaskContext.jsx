'use client';
const { createContext, useContext } = require('react');

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTask must be used whitin a provider');

  return context;
};

export const TaskProvider = ({ children }) => {
  const tasks = [1, 2, 3];

  return (
    <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>
  );
};
