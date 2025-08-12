import React from 'react';

export default function TaskList({ tasks, onToggle }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Priority</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Created At</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <tr key={task._id}>
            <td>{task.title}</td>
            <td>{task.priority}</td>
            <td>{task.dueDate ? new Date(task.dueDate).toLocaleDateString() : '-'}</td>
            <td>{task.isDone ? 'Done' : 'Pending'}</td>
            <td>{new Date(task.createdAt).toLocaleString()}</td>
            <td>
              <button onClick={() => onToggle(task._id)}>Toggle</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
