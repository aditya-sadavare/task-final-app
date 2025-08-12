import React, { useState } from 'react';

export default function Filters({ onChange }) {
  const [q, setQ] = useState('');
  const [priority, setPriority] = useState('');
  const [isDone, setIsDone] = useState('');
  const [sort, setSort] = useState('');
  const [order, setOrder] = useState('asc');

  const applyFilters = () => {
    onChange({ q, priority, isDone, sort, order });
  };

  return (
    <div className="filters">
      <input placeholder="Search" value={q} onChange={(e) => setQ(e.target.value)} />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <select value={isDone} onChange={(e) => setIsDone(e.target.value)}>
        <option value="">All</option>
        <option value="true">Done</option>
        <option value="false">Pending</option>
      </select>
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort by</option>
        <option value="createdAt">Created At</option>
        <option value="dueDate">Due Date</option>
        <option value="priority">Priority</option>
      </select>
      <button onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}>
        Order: {order}
      </button>
      <button onClick={applyFilters}>Apply</button>
    </div>
  );
}
