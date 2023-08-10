import React from 'react';

export default function TodoItem({ todo }) {
  return (
    <li>
      <label htmlFor={todo.id}>
        <input type="checkbox" checked={todo.isCompleted} />
        <span>{todo.text}</span>
      </label>
    </li>
  );
}
