import React, { useState, useEffect } from 'react';
import { getTasks, addTask, toggleTask } from './services/api';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Filters from './components/Filters';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({});

  const fetchTasks = async () => {
    const res = await getTasks(filters);
    setTasks(res.data);
  };

  useEffect(() => { fetchTasks(); }, [filters]);

  const handleAdd = async (task) => {
    await addTask(task);
    fetchTasks();
  };

  const handleToggle = async (id) => {
    await toggleTask(id);
    fetchTasks();
  };

  return (
    <div className="container">
      <h1>Task Tracker</h1>
      <Filters onChange={setFilters} />
      <TaskForm onAdd={handleAdd} />
      <TaskList tasks={tasks} onToggle={handleToggle} />
    </div>
  );
}
