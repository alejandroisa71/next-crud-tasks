'use client';
import { useTasks } from '@/context/TaskContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const page = () => {
  const [task, setTask] = useState();
  const { addTask } = useTasks();
  const router = useRouter();

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task.title, task.description);
    router.push('/')
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Write a title" onChange={handleChange} />
      <textarea
        name="description"
        placeholder="Write a description"
        onChange={handleChange}
      />
      <button>Save</button>
    </form>
  );
};
export default page;
